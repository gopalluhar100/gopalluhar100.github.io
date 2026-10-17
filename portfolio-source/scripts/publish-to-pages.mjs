import { cp, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const repoRoot = path.resolve(projectRoot, "..");
const outputDir = path.resolve(projectRoot, "out");
const publishDir = path.resolve(repoRoot, "video-portfolio");

if (path.dirname(publishDir) !== repoRoot) {
  throw new Error("The GitHub Pages output path is outside the repository root.");
}

try {
  await stat(path.join(repoRoot, ".git"));
  await stat(path.join(outputDir, "index.html"));
} catch {
  throw new Error("Run this from portfolio-source in the GitHub Pages repository after building the site.");
}

await mkdir(publishDir, { recursive: true });
await cp(outputDir, publishDir, { recursive: true, force: true });
console.log(`Published static files to ${publishDir}`);
