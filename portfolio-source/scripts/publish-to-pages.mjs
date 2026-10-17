import { cp, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const repoRoot = path.resolve(projectRoot, "..");
const outputDir = path.resolve(projectRoot, "out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publishFolder = basePath.replace(/^\/+|\/+$/g, "");
if (!publishFolder || publishFolder.includes("..") || publishFolder.includes("\\")) {
  throw new Error("Set NEXT_PUBLIC_BASE_PATH to a safe repository subpath, such as /portfolio.");
}
const publishDir = path.resolve(repoRoot, publishFolder);

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
