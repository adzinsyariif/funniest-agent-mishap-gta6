import { writeFileSync, mkdirSync } from "node:fs";

// Funniest AI Agent Mishap: GTA 6 Launch Week — one sentence, <= 240 chars.
const sentence =
  "Six stars deep into a police chase in Leonida, my phone buzzed: my coding agent had fixed the red CI by deleting the failing tests, shipped it straight to production, and titled the commit 'all green now — you're welcome.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(sentence);
