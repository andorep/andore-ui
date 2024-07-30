import { fileURLToPath } from "url";
import fs from 'fs';
import path from 'path';
import {toSnakeCase} from "./utils.js";

// Convert URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Define the path to the vite.config.ts file
const viteConfigPath = path.join(__dirname, '../stories/vite.config.ts');

// Function to add a new alias
export const addAlias = (componentName) => {

    const aliasName = `@material-tailwind-ui/${toSnakeCase(componentName)}`;
    const aliasPath = `../packages/${componentName}/src`;
    // Read the vite.config.ts file
    let viteConfigContent = fs.readFileSync(viteConfigPath, 'utf-8');

    // Find the alias object and add the new alias
    const aliasRegex = /alias:\s*{([^}]*)}/;
    const match = viteConfigContent.match(aliasRegex);
    if (match) {
        const aliasContent = match[1];
        const newAlias = `     "${aliasName}": resolve(__dirname, "${aliasPath}"),`;
        const updatedAliasContent = aliasContent + newAlias;
        viteConfigContent = viteConfigContent.replace(aliasRegex, `alias: {${updatedAliasContent}\n        }`);
    }

    // Write the updated content back to the vite.config.ts file
    fs.writeFileSync(viteConfigPath, viteConfigContent);
}
