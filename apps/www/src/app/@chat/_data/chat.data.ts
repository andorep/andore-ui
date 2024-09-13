import * as fs from "node:fs";
import path from "node:path";
import {cache} from "react";

export interface Chat {
    id: string;
    from: string;
    message: string;
    date: string;
}

export const fetchChat = cache(async (): Promise<Chat[]> => {
    const filePath = path.join(process.cwd(), "src/app/@chat/_data/chat-list.json"); // Read the file content

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8");

    return JSON.parse(fileContent);
});
