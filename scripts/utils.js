import fs from "fs";
import path from "path";

export const toSnakeCase = (str) => {
    const snakeCase = str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return snakeCase.slice(1);
}

export const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export const toPascalCase = (str) => {
    return str.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(str) {
    return str.replace(/-/, '').toUpperCase();
}

export const generateTemplate = (dir, componentName, file, extraReplaces) => {
    let jsonString = fs.readFileSync(path.join(dir, `../templates/${file}`), "utf-8");
    if(extraReplaces) {
        for (const key in extraReplaces) {
            jsonString = jsonString.replace(new RegExp(`\\$${key}`, 'g'), extraReplaces[key]);
        }
    }
    // replace $COMPONENTNAME with the actual component name
    jsonString = jsonString.replace(/\$COMPONENTNAME/g, componentName);
    jsonString = jsonString.replace(/\$SNAKE-COMPONENT/g, toSnakeCase(componentName));
    jsonString = jsonString.replace(/\$PASCAL-COMPONENT/g, toPascalCase(componentName));
    return jsonString;
}
