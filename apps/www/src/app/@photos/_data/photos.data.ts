import * as fs from "node:fs";
import path from "node:path";
import {cache} from "react";

export interface Photos {
    id: string;
    title: string;
    url: string;
}

export const fetchPhotos = cache(async (): Promise<Photos[]> => {
    const filePath = path.join(process.cwd(), "src/app/@photos/_data/photos-list.json"); // Read the file content

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8");

    return JSON.parse(fileContent);
});
