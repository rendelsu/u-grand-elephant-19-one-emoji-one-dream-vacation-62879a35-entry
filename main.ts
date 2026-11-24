// One Emoji, One Dream Vacation — entry: a single desert-island emoji.
// A wordless postcard: one tiny island, one palm, endless sea — the trip
// everyone pictures when they say "dream vacation".
// Revision: kept the program minimal — one constant, one write, no extras.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const emoji = "\u{1F3DD}\u{FE0F}"; // desert island
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, emoji, "utf8");
chmodSync(outFile, 0o644);
