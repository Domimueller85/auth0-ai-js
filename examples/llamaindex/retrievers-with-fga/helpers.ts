import { Document } from "llamaindex";
import fs from "node:fs/promises";

async function readDoc(path: string) {
  return await fs.readFile(path, "utf-8");
}

export async function readDocuments() {
  const document1 = new Document({
    text: await readDoc("./assets/docs/public-doc.md"),
    metadata: {
      id: "public-doc",
    },
  });
  const document2 = new Document({
    text: await readDoc("./assets/docs/private-doc.md"),
    metadata: {
      id: "private-doc",
    },
  });

  return [document1, document2];
}
