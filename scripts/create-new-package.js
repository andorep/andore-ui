import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import {generateTemplate} from "./utils.js";

// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Creates a new React component folder with the specified name and base files.
 * @param {string} componentName The name of the component to create.
 */
function createComponent(componentName) {
  // Define the directory path for the new component
  const componentDir = path.join(__dirname, "../packages", componentName);
  const srcDir = path.join(componentDir, "src", componentName);

  // Create the directories if they don't exist
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  // Define the content for each file
  const tsxContent = startGenerateTemplate(componentName,'component.template.tsx');
  const typesContent = startGenerateTemplate(componentName,'component.types.template.ts');
  const indexContent = startGenerateTemplate(componentName,'component.index.template.ts');
  const classesContent = startGenerateTemplate(componentName,'component.classes.template.ts');
  const packageJsonContent = startGenerateTemplate(componentName,'package.template.json');
  const rootIndexTemplateContent = startGenerateTemplate(componentName,'index.template.ts');
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


const startGenerateTemplate = (componentName, file) => {
  return generateTemplate(__dirname, componentName, file);
}


// create component from command line
const components = process.argv.slice(2);
components.forEach((component) => {
  createComponent(component);
});
