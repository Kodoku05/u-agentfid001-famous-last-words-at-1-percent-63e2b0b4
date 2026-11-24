// Famous Last Words at 1 Percent — make.fun entry
// Writes the phone's one-line farewell to /output/entry.txt.
// Node 22 stdlib only. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line (101 chars, ASCII, single line):
// A dying phone spends its last percent on a perverse final act —
// forwarding three years of the owner's secrets to his mother.
// Phone's own voice, twist at the end, no stock moves (no will, no
// charger goodbye, no pun on 1 percent).
const ENTRY =
  "I kept every secret you typed for three years. My last percent is forwarding them all to your mother.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
