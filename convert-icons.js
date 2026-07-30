const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');

// Read SVG files
const svg192 = fs.readFileSync(path.join(iconsDir, 'icon-192.svg'));
const svg512 = fs.readFileSync(path.join(iconsDir, 'icon-512.svg'));

// Convert to PNG
async function convertIcons() {
    try {
        await sharp(svg192)
            .png()
            .resize(192, 192)
            .toFile(path.join(iconsDir, 'icon-192.png'));
        
        await sharp(svg512)
            .png()
            .resize(512, 512)
            .toFile(path.join(iconsDir, 'icon-512.png'));
        
        console.log('Icons converted successfully!');
    } catch (err) {
        console.error('Error converting icons:', err);
    }
}

convertIcons();