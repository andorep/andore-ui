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

    const componentName = aliasValue ?? parentComponentName;
    // Define the directory path for the new component
    const componentDir = path.join(__dirname, "../packages", componentName);
    const srcDir = path.join(componentDir, "src", componentName);

    // Create the directories if they don't exist
    if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir, {recursive: true});
    }


    const extraReplaces = {
        "RADIXCOMPONENTNAME": parentComponentName,
        "SNAKE-RADIX-COMPONENT": toSnakeCase(parentComponentName),
    }

    // Define the content for each file
    const tsxContent = startGenerateTemplate(componentName, 'radixComponent.template.tsx', extraReplaces);
    const typesContent = startGenerateTemplate(componentName, 'radixComponent.types.template.ts', extraReplaces);
    const indexContent = startGenerateTemplate(componentName, 'component.index.template.ts', extraReplaces);
    const classesContent = startGenerateTemplate(componentName, 'component.classes.template.ts', extraReplaces);
    const packageJsonContent = startGenerateTemplate(componentName, 'package.template.json', extraReplaces);
    const rootIndexTemplateContent = startGenerateTemplate(componentName, 'index.template.ts', extraReplaces);
    const viteConfigContent = fs.readFileSync(path.join(__dirname, "../templates/vite.config.template.ts"), "utf-8");
    const tsconfigContent = fs.readFileSync(path.join(__dirname, "../templates/tsconfig.template.json"), "utf-8");

    // Write the .tsx file
    fs.writeFileSync(path.join(srcDir, `${componentName}.tsx`), tsxContent);

    // Write the .types.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.types.ts`), typesContent);

    // Write the index.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.classes.ts`), classesContent);
    fs.writeFileSync(path.join(srcDir, `index.ts`), indexContent);

    // write the root index.ts file
    fs.writeFileSync(path.join(componentDir, `./src/index.ts`), rootIndexTemplateContent);

    // Write the package.json file
    fs.writeFileSync(path.join(componentDir, `package.json`), packageJsonContent);

    // Write the tsconfig.json file
    fs.writeFileSync(path.join(componentDir, `tsconfig.json`), tsconfigContent);

    // Write the vite.config.ts file
    fs.writeFileSync(path.join(componentDir, `vite.config.ts`), viteConfigContent);

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

// get the component name
const parentComponent = componentCommands[0];

if (!parentComponent) {
    console.error("Please provide a component name.");
    process.exit(1);
}

createComponent(parentComponent, commands);
