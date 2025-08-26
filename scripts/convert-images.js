const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const images = fs.readdirSync(publicDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

async function convertImages() {
  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, image.replace(/\.(png|jpg|jpeg)$/, '.webp'));
    
    if (!fs.existsSync(outputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        console.log(`Converted ${image} to WebP`);
      } catch (error) {
        console.error(`Error converting ${image}:`, error);
      }
    }
  }
}

convertImages();