// Simple script to copy dist/index.html to dist/404.html for GitHub Pages SPA fallback
const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')
const fallbackHtmlPath = path.join(distDir, '404.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ dist/index.html not found. Run "npm run build" before executing this script.')
  process.exit(1)
}

try {
  fs.copyFileSync(indexHtmlPath, fallbackHtmlPath)
  console.log('✅ 404.html created from index.html for GitHub Pages SPA fallback.')
} catch (error) {
  console.error('❌ Failed to create 404.html:', error)
  process.exit(1)
}