import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

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
  const tsxContent = componentTemplate(componentName);

  // Write the .tsx file
  fs.writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), tsxContent);

  console.log(`${componentName} story created successfully.`);
}

const toSnakeCase = (str) =>{
  const snakeCase = str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return snakeCase.slice(1);
}

const componentTemplate = (componentName) =>
    `import type { Meta, StoryObj } from "@storybook/react";
import {${componentName}} from "@material-tailwind-ui/${toSnakeCase(componentName)}";

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  render: () => (
    <>
      <${componentName}>
       Story
      </${componentName}>
    </>
  ),
};`;


// create component from command line
// from the second argument we get all the components
const components = process.argv.slice(2);
components.forEach((component) => {
  createComponent(component);
});

