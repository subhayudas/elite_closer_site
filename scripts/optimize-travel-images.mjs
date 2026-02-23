#!/usr/bin/env node
/**
 * Optimizes travel images for web - resizes to max 1200px width and compresses.
 * Run: node scripts/optimize-travel-images.mjs
 */
import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const SRC_DIR = join(PUBLIC, "travel pictures");
const OUT_DIR = join(PUBLIC, "travel-pictures-optimized");

const MAX_WIDTH = 1200;
const QUALITY = 80;

async function optimize() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = await readdir(SRC_DIR);
  const images = files.filter((f) => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/.test(f));

  for (const file of images) {
    const input = join(SRC_DIR, file);
    const output = join(OUT_DIR, file.replace(/\.[^.]+$/, ".jpg"));
    const { size: before } = await stat(input);
    await sharp(input)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(output);
    const { size: after } = await stat(output);
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`);
  }
  console.log(`\nOptimized images saved to public/travel-pictures-optimized/`);
}

optimize().catch(console.error);
