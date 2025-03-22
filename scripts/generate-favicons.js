import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [16, 32, 48, 128, 192, 512];
const inputSvg = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
    try {
        // Read the SVG file
        const svgBuffer = await fs.readFile(inputSvg);

        // Generate PNG favicons in different sizes
        for (const size of sizes) {
            await sharp(svgBuffer)
                .resize(size, size)
                .png()
                .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
            console.log(`Generated ${size}x${size} favicon`);
        }

        // Generate Apple Touch Icon (180x180)
        await sharp(svgBuffer)
            .resize(180, 180)
            .png()
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));
        console.log('Generated Apple Touch Icon');

        // Copy SVG for Safari pinned tab
        await fs.copyFile(
            inputSvg,
            path.join(outputDir, 'safari-pinned-tab.svg')
        );
        console.log('Copied Safari pinned tab SVG');

        console.log('All favicons generated successfully!');
    } catch (error) {
        console.error('Error generating favicons:', error);
        process.exit(1);
    }
}

generateFavicons(); 