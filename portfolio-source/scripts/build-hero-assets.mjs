import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const media = path.join(root, "public");
const source = path.join(root, "assets", "source");

await mkdir(path.join(media, "hero"), { recursive: true });
await mkdir(path.join(media, "portrait"), { recursive: true });
// The supplied clip is already H.264/AAC. Keep its original quality and audio.
await copyFile(
  path.join(source, "intro-source.mp4"),
  path.join(media, "hero", "hero.mp4"),
);

await sharp(path.join(source, "gopal-3d-source.png"))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 84, effort: 5 })
  .toFile(path.join(media, "portrait", "portrait-bust.webp"));

console.log("Created hero.mp4 and optimized portrait-bust.webp from the supplied media.");
