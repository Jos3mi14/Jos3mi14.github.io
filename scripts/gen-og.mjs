// Script temporal para generar og-image.png
// Uso: node scripts/gen-og.mjs
import sharp from 'sharp'

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#050a0f"/>
  <text x="50%" y="45%" font-family="sans-serif" font-size="52" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
    José Emilio Sánchez Miñón
  </text>
  <text x="50%" y="58%" font-family="sans-serif" font-size="28" fill="#00e5ff" text-anchor="middle" dominant-basaline="middle">
    Desarrollador Móvil &amp; Producto
  </text>
</svg>
`

await sharp(Buffer.from(svg))
  .resize(width, height)
  .png()
  .toFile('public/og-image.png')

console.log('✓ public/og-image.png generated (1200x630)')
