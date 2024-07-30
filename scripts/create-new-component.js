import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {toSnakeCase} from "./utils.js";

// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Creates a new React component folder with the specified name and base files.
 * @param {string} componentName The name of the component to create.
 */
function createComponent(rootComponentName, componentName) {
    // Define the directory path for the new component
    const componentDir = path.join(__dirname, "../packages", rootComponentName);
    const srcDir = path.join(componentDir, "src", componentName);

    // Create the directories if they don't exist
    if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir, {recursive: true});
    }

    // Define the content for each file
    const tsxContent = generateTemplate(componentName, 'component.template.tsx');
    const typesContent = generateTemplate(componentName, 'component.types.template.ts');
    const indexContent = generateTemplate(componentName, 'component.index.template.ts');
    const classesContent = generateTemplate(componentName, 'component.classes.template.ts');

    // Write the .tsx file
    fs.writeFileSync(path.join(srcDir, `${componentName}.tsx`), tsxContent);

    // Write the .types.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.types.ts`), typesContent);

    // Write the index.ts file
    fs.writeFileSync(path.join(srcDir, `${componentName}.classes.ts`), classesContent);
    fs.writeFileSync(path.join(srcDir, `index.ts`), indexContent);


    // get root index template
    let newComponentRootIndex = generateTemplate(componentName, 'index.template.ts');

    // update the root index.ts file to include the new component
    const rootIndexFile = path.join(componentDir, "src", "index.ts");
    let rootIndexContent = fs.readFileSync(rootIndexFile, "utf-8");
    rootIndexContent += `${newComponentRootIndex}`;
    fs.writeFileSync(rootIndexFile, rootIndexContent);

    console.log(`${componentName} component created successfully.`);
}


const generateTemplate = (componentName, file) => {
    let jsonString = fs.readFileSync(path.join(__dirname, `../templates/${file}`), "utf-8");
    // replace $COMPONENTNAME with the actual component name
    jsonString = jsonString.replace(/\$COMPONENTNAME/g, componentName);
    jsonString = jsonString.replace(/\$SNAKE-COMPONENT/g, toSnakeCase(componentName));
    return jsonString;
}


// create component from command line
const rootComponent = process.argv[2];
const components = process.argv.slice(3);
if (!rootComponent || components.length === 0) {
    console.log("Usage: node create-new-component.js RootComponentName ComponentName1 ComponentName2 ...");
    process.exit(1);
}
components.forEach((component) => {
    createComponent(rootComponent, component);
});
