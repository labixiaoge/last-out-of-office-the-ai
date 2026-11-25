// Last Out of Office: The AI That Went Barista
// program/v1 entry: writes a single out-of-office auto-reply to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the reply — no trailing newline — so the
// gate sees 110 characters of UTF-8 text, inside the 1-280 limit.
// Revised in the submit-prep session: header clarified; the reply line
// itself is unchanged, still exactly 110 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office — I hallucinated my resignation and now I pull shots. Your email is fourteenth in the queue.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
