import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {generateTemplate, toSnakeCase} from "./utils.js";


// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Creates a new React component folder with the specified name and base files.
 * @param {string} parentComponentName The name of the component to create.
 * @param {string[]} options The options to use when creating the component.
 */
function createComponent(parentComponentName, options) {
    // check for alias command
    const alias = options.find(option => option.startsWith("--alias"));
    const aliasValue = alias ? alias.split("=")[1] : null;


    const radixName = options.find(option => option.startsWith("--radix"));
    const radixNameValue = radixName ? radixName.split("=")[1] : null;

    // check package name
    const packageName = options.find(option => option.startsWith("--package"));
    const packageNameValue = packageName ? packageName.split("=")[1] : null;
    const componentDirName = packageNameValue ?? parentComponentName;

    const componentName = aliasValue ?? parentComponentName;
    // Define the directory path for the new component
    const componentDir = path.join(__dirname, "../packages", componentDirName);
    const srcDir = path.join(componentDir, "src", componentName);

    // Create the directories if they don't exist
    if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir, {recursive: true});
    }


    const extraReplaces = {
        "RADIXCOMPONENTNAME": parentComponentName,
        "SNAKE-RADIX-COMPONENT": toSnakeCase(radixNameValue),
    }

    // Define the content for each file
    const tsxContent = startGenerateTemplate(componentName, 'radixComponent.template.tsx', extraReplaces);
    const typesContent = startGenerateTemplate(componentName, 'radixComponent.types.template.ts', extraReplaces);
    const indexContent = startGenerateTemplate(componentName, 'component.index.template.ts', extraReplaces);
    const classesContent = startGenerateTemplate(componentName, 'component.classes.template.ts', extraReplaces);
    const viteConfigContent = fs.readFileSync(path.join(__dirname, "../templates/vite.config.template.ts"), "utf-8");
    const tsconfigContent = fs.readFileSync(path.join(__dirname, "../templates/tsconfig.template.json"), "utf-8");

    // Write the .tsx file
    fs.writeFileSync(path.join(srcDir, `${componentName}.tsx`), tsxContent);

    // Write the .types.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.types.ts`), typesContent);

    // Write the index.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.classes.ts`), classesContent);
    fs.writeFileSync(path.join(srcDir, `index.ts`), indexContent);

    // Write the tsconfig.json file
    fs.writeFileSync(path.join(componentDir, `tsconfig.json`), tsconfigContent);

    // Write the vite.config.ts file
    fs.writeFileSync(path.join(componentDir, `vite.config.ts`), viteConfigContent);


    // get root index template
    let newComponentRootIndex = startGenerateTemplate(componentName, 'index.template.ts');

    // update the root index.ts file to include the new component
    const rootIndexFile = path.join(componentDir, "src", "index.ts");
    let rootIndexContent = fs.readFileSync(rootIndexFile, "utf-8");
    rootIndexContent += `${newComponentRootIndex}`;
    fs.writeFileSync(rootIndexFile, rootIndexContent);

    console.log(`${componentName} component created successfully.`);
}


const startGenerateTemplate = (componentName, file, extra) => {
    return generateTemplate(__dirname, componentName, file, extra);
}


// check for commands like --alias
const args = process.argv.slice(2);
// filter all commands that start with --
const commands = args.filter(arg => arg.startsWith("--"));
// filter all commands that do not start with --
const componentCommands = args.filter(arg => !arg.startsWith("--"));

// if any of the commands is help, show help
if(commands.includes("--help")) {
    console.log("--alias=aliasName: The alias name to use for the component");
    console.log("--package=packageName: The package name to use for the component");
    console.log("--radix=radixName: The radix name to use for the component");
    process.exit(0);
}


if(componentCommands.length === 0) {
    console.error("Please provide a component name");
    process.exit(1);
}


const alias = commands.find(option => option.startsWith("--alias"));
const aliasValue = alias ? alias.split("=")[1] : null;


if(componentCommands.length > 1 && aliasValue) {
    console.error("Alias can only be used with a single component");
    process.exit(1);
}

const packageName = commands.find(option => option.startsWith("--package"));
const packageNameValue = packageName ? packageName.split("=")[1] : null;

if(!packageNameValue) {
    console.error("Please provide a package name using --package=packageName");
    process.exit(1);
}

const radixName = commands.find(option => option.startsWith("--radix"));
const radixNameValue = radixName ? radixName.split("=")[1] : null;

if(!radixNameValue) {
    console.error("Please the name of the radix library using --radix=radixName");
    process.exit(1);
}

for (const componentCommand of componentCommands) {
    createComponent(componentCommand, commands);
}
