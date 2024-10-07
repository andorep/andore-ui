import * as fs from "node:fs";
import path from "node:path";
import {cache} from "react";

export interface PagesData {
    title: string;
    pages: string[];
}

export const fetchPages = cache(async (): Promise<PagesData[]> => {
    const filePath = path.join(process.cwd(), "src/app/docs/_data/pages.json"); // Read the file content

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8");

    return JSON.parse(fileContent);
});
