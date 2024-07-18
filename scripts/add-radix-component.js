import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Creates a new React component folder with the specified name and base files.
 * @param {string} parentComponent The name of the parent component to extract from.
 * @param {string} componentName The name of the component to create.
 */
function createComponent(parentComponent, componentName) {
  // Define the directory path for the new component
  const componentDir = path.join(__dirname, "../src", componentName);

  // Create the directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  // Define the content for each file
  const tsxContent = componentTemplate(componentName, parentComponent);

  const typesContent = typesTemplate(componentName, parentComponent);

  const indexContent = indexTemplate(componentName);

  const classesContent = classesTemplate(componentName);

  // Write the .tsx file
  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);

  // Write the .types.ts file
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.types.ts`),
    typesContent,
  );

  fs.writeFileSync(path.join(componentDir, `${componentName}.classes.ts`), classesContent);
  // Write the index.ts file
  fs.writeFileSync(path.join(componentDir, `index.ts`), indexContent);

  console.log(`${componentName} component created successfully.`);
}

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const componentTemplate = (componentName, parentComponent) =>
  `import React from 'react';
import { twMerge } from 'tailwind-merge';
import {${componentName} as Radix${componentName}} from "@radix-ui/react${toSnakeCase(parentComponent)}";
import { ${componentName}Props } from './${componentName}.types';
import { ${componentName}BaseClassName } from './${componentName}.classes';

const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(${componentName}BaseClassName, className);
    return (
    <Radix${componentName}
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default ${componentName};
`;

const typesTemplate = (componentName, parentComponent) =>
  `import { PropsWithChildren } from 'react';
import type { ${componentName}Props as Radix${componentName}Props } from "@radix-ui/react${toSnakeCase(parentComponent)}";

export interface ${componentName}Props extends PropsWithChildren<Radix${componentName}Props> {
 }`;

const classesTemplate = (componentName) =>
    `export const ${componentName}BaseClassName = "${toSnakeCase(componentName).slice(1)}-root";`

const indexTemplate = (componentName) =>
  `export * from './${componentName}.types';
export * from './${componentName}.classes';
import ${componentName} from './${componentName}';

export default ${componentName};`;

// create component from command line
const componentName = process.argv[2];
// from the second argument, we can specify if we want to create all internal components
// Internal components are just the last part of the component name (e.g.  Trigger, Portal, Content etc.)
const internalComponents = process.argv.slice(3);
createComponent(componentName, componentName);

if (internalComponents.length) {
  internalComponents.forEach((component) => {
    createComponent(componentName, componentName+component);
  });
}
