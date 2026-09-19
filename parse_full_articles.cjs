const fs = require('fs');
const path = require('path');

const dir = 'Guide-Articles/English/English26-35';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log('=== ' + f + ' ===');
  
  // Find article body
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (!articleMatch) {
    console.log('No article tag found!');
    continue;
  }
  const articleHtml = articleMatch[1];
  
  // Check headings
  const headings = [...articleHtml.matchAll(/<(h[23])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
    level: m[1].toLowerCase(),
    text: m[2].replace(/<[^>]+>/g, '').trim()
  }));
  
  console.log('Headings in body:', headings);
}
