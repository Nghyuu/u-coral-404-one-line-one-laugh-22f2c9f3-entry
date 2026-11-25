import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "My dog judges me silently every time I eat alone, so now I eat standing up in the dark, like a raccoon with a mortgage.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line, "utf8");
chmodSync(entryPath, 0o644);
