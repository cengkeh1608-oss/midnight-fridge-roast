import { mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast — one line, written to /output/entry.txt.
const LINE =
  "It's 12:09 AM. My fridge is holding my cold pizza hostage until morning and calling it 'eco mode.'";

// The gate accepts 1 to 200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
