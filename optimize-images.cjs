const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(process.cwd(), "public", "images", "gallery");
const outputDir = path.join(process.cwd(), "public", "images", "gallery-optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file));

async function optimize() {
  for (const file of files) {
    const input = path.join(inputDir, file);
    const output = path.join(
      outputDir,
      file.replace(/\.(webp|jpg|jpeg|png)$/i, ".webp")
    );

    await sharp(input)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 78,
        effort: 5,
      })
      .toFile(output);

    const original = fs.statSync(input).size;
    const optimized = fs.statSync(output).size;

    console.log(
      `${file}: ${(original / 1024 / 1024).toFixed(2)} MB -> ${(optimized / 1024).toFixed(0)} KB`
    );
  }

  console.log("\nDone! Optimized images are in:");
  console.log("public/images/gallery-optimized");
}

optimize().catch(console.error);
