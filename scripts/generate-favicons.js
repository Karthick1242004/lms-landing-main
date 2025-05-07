// This is a Node.js script to generate favicons
// You would run this script with: node scripts/generate-favicons.js

const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

// Path to your source SVG logo
const sourceSvg = path.join(__dirname, "../public/logo.svg")

// Define the sizes we need
const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-192x192.png", size: 192 },
  { name: "favicon-512x512.png", size: 512 },
]

// Read the SVG file
const svgBuffer = fs.readFileSync(sourceSvg)

// Generate each size
async function generateFavicons() {
  for (const { name, size } of sizes) {
    const outputPath = path.join(__dirname, "../public", name)

    await sharp(svgBuffer).resize(size, size).png().toFile(outputPath)

    console.log(`Generated ${name}`)
  }

  // Also generate ICO file (16x16 and 32x32 combined)
  // Note: For ICO generation, you might need additional libraries like 'png-to-ico'
  // This is a simplified example
  console.log("Note: For favicon.ico, consider using a tool like https://favicon.io/")
}

generateFavicons().catch(console.error)

