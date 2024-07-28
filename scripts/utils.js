export const toSnakeCase = (str) =>{
    const snakeCase = str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return snakeCase.slice(1);
}
