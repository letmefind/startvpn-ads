/**
 * Next با export تخت هم `knowledge.html` می‌سازد هم پوشهٔ `knowledge/` فقط با __next*.txt.
 * Apache برای `/knowledge/` به پوشه نگاه می‌کند و چون index.html نیست → 403.
 * این اسکریپت `knowledge.html` را به `knowledge/index.html` کپی می‌کند.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "out");

const routes = ["knowledge", "netblocks", "packages", "terms"];

for (const name of routes) {
  const flat = path.join(outDir, `${name}.html`);
  const dest = path.join(outDir, name, "index.html");
  if (!fs.existsSync(flat)) {
    console.error(`[sync-route-index-html] MISSING: ${name}.html`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(flat, dest);
  console.log(`[sync-route-index-html] ${name}.html → ${name}/index.html`);
}

console.log("[sync-route-index-html] OK");
