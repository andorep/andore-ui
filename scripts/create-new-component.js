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
  const componentDir = path.join(__dirname, "../packages", componentName);

  // Create the directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  // Define the content for each file
  const tsxContent = componentTemplate(componentName);

  const typesContent = typesTemplate(componentName);

  const indexContent = indexTemplate(componentName);

  const classesContent = classesTemplate(componentName);

  // Write the .tsx file
  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);

  // Write the .types.ts file
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.types.ts`),
    typesContent,
  );

  // Write the index.ts file
  fs.writeFileSync(path.join(componentDir, `${componentName}.classes.ts`), classesContent);
  fs.writeFileSync(path.join(componentDir, `index.ts`), indexContent);

  console.log(`${componentName} component created successfully.`);
}

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const componentTemplate = (componentName) =>
  `import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ${componentName}Props } from './${componentName}.types';
import { ${componentName}BaseClassName } from './${componentName}.classes';

const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(${componentName}BaseClassName, className);
    return (
      <div {...rest} ref={forwardedRef} className={classes} >
          {children}
      </div>
    );
});

export default ${componentName};`;

const typesTemplate = (componentName) =>
  `import React, { PropsWithChildren } from 'react';
export interface ${componentName}Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}`;

const classesTemplate = (componentName) =>
    `export const ${componentName}BaseClassName = "${toSnakeCase(componentName).slice(1)}-root";`

const indexTemplate = (componentName) =>
  `export * from './${componentName}.types';
export * from './${componentName}.classes';
import ${componentName} from './${componentName}';

export default ${componentName};`;

// create component from command line
// from the second argument, we can specify if we want to create all internal components
// Internal components are just the last part of the component name (e.g.  Trigger, Portal, Content etc.)
const components = process.argv.slice(2);
components.forEach((component) => {
  createComponent(component);
});

