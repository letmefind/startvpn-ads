/**
 * با `trailingSlash: false` خروجی به‌صورت `knowledge.html` در ریشهٔ out است (نه پوشهٔ knowledge/).
 * build با `--webpack` روی لینوکس برای ساخت همین فایل‌ها لازم است.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "out");

const required = [
  "index.html",
  "knowledge.html",
  "packages.html",
  "netblocks.html",
  "terms.html",
  "_next/static",
];

let failed = false;
for (const rel of required) {
  const p = path.join(outDir, rel);
  if (!fs.existsSync(p)) {
    console.error(`[verify-static-export] MISSING: ${rel}`);
    failed = true;
  }
}

if (failed) {
  console.error(
    "\n[verify-static-export] خروجی `out/` ناقص است. `rm -rf .next out` و `npm run build` بزنید.\n",
  );
  process.exit(1);
}

console.log("[verify-static-export] OK — فایل‌های .html مسیرها در ریشهٔ out وجود دارند.");
