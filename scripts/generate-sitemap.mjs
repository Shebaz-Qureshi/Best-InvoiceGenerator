import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://best-invoicegenerator.com';

// 1. Core pages
const corePages = [
  '/',
  '/ai/',
  '/guides/',
  '/about/',
  '/contact/',
  '/faq/',
  '/privacy-policy/',
  '/saved-invoices/',
  '/terms/',
  '/thank-you/'
];

// 2. Guides slugs
const guidesPath = path.join(rootDir, 'src', 'data', 'guides.ts');
const guidesContent = fs.readFileSync(guidesPath, 'utf8');
const slugMatches = [...guidesContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
const guideSlugs = slugMatches.map(m => m[1]);

const guideUrls = guideSlugs.map(slug => `/guides/${slug}/`);

// 3. Multilingual pages for locales: es, fr, de, it, nl, pt, ar, ja
const locales = ['es', 'fr', 'de', 'it', 'nl', 'pt', 'ar', 'ja'];
const localizedSubpages = [
  '',
  'about',
  'contact',
  'faq',
  'privacy-policy',
  'saved-invoices',
  'terms',
  'thank-you'
];

const localizedUrls = [];
for (const loc of locales) {
  for (const sub of localizedSubpages) {
    const pageUrl = sub ? `/${loc}/${sub}/` : `/${loc}/`;
    localizedUrls.push(pageUrl);
  }
}

// Combine all unique URLs in a clean, logical order
const allPaths = [
  ...corePages,
  ...guideUrls,
  ...localizedUrls
];

const uniquePaths = [...new Set(allPaths)];
const urls = uniquePaths.map(p => `${BASE_URL}${p}`);

// Build URL set XML according to requested format:
// <url>
//   <loc>https://example.com/page</loc>
// </url>
const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`),
  '</urlset>',
  ''
];
const sitemapXml = xmlLines.join('\n');

// Build sitemap-index XML formatted properly
const indexLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <sitemap>',
  `    <loc>${BASE_URL}/sitemap-0.xml</loc>`,
  '  </sitemap>',
  '  <sitemap>',
  `    <loc>${BASE_URL}/sitemap.xml</loc>`,
  '  </sitemap>',
  '</sitemapindex>',
  ''
];
const sitemapIndexXml = indexLines.join('\n');

const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

// Write to public directory
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
console.log(`Generated public/sitemap.xml and public/sitemap-0.xml with ${urls.length} URLs.`);
console.log(`Generated public/sitemap-index.xml.`);

// Write to dist directory if it exists
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
  console.log(`Updated dist/sitemap.xml, dist/sitemap-0.xml, and dist/sitemap-index.xml.`);
}
