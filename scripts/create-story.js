import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import {toSnakeCase} from "./utils.js";

// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Creates a new React component folder with the specified name and base files.
 * @param {string} componentName The name of the component to create.
 */
function createComponent(componentName) {
  // Define the directory path for the new component
  const componentDir = path.join(__dirname, "../stories/src");

  // Define the content for each file
  const tsxContent = generateTemplate(componentName, "component.stories.template.tsx");

  // Write the .tsx file
  fs.writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), tsxContent);

  // Update package.json
  updatePackageJson(componentName);

  console.log(`${componentName} story created successfully.`);
}


const generateTemplate = (componentName, file) => {
  let jsonString = fs.readFileSync(path.join(__dirname, `../templates/${file}`), "utf-8");
  // replace $COMPONENTNAME with the actual component name
  jsonString = jsonString.replace(/\$COMPONENTNAME/g, componentName);
  jsonString = jsonString.replace(/\$SNAKE-COMPONENT/g, toSnakeCase(componentName));
  return jsonString;
}


const updatePackageJson = (componentName) => {
  const packageJsonPath = path.join(__dirname, "../stories/package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Add the new component to dependencies
  packageJson.dependencies = packageJson.dependencies || {};
  packageJson.dependencies[`@material-tailwind-ui/${toSnakeCase(componentName)}`] = "workspace:*";

  // Write the updated package.json back to the file
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}


// create component from command line
// from the second argument we get all the components
const components = process.argv.slice(2);
components.forEach((component) => {
  createComponent(component);
});

