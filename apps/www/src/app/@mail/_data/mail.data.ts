import * as fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export interface Mail {
  id: string;
  from: string;
  subject: string;
  message: string;
  date: string;
  category: Category;
}

type Category = "flights" | "trips" | "explore";

const mailJSONFiles = {
  flights: "flights-mail.json",
  trips: "trips-mail.json",
  explore: "explore-mail.json",
};

export const fetchMail = cache(async (category: Category): Promise<Mail[]> => {
  const jsonFile = mailJSONFiles[category]; // Define the file path relative to the project root
  const filePath = path.join(process.cwd(), "src/app/@mail/_data", jsonFile); // Read the file content

  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8");

  return JSON.parse(fileContent);
});
