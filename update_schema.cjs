const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.git') && !dirFile.includes('.next')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.html') || dirFile.endsWith('.txt')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "UNBACKED",
  "url": "https://unbacked.agency",
  "logo": "https://unbacked.agency/logo.png",
  "description": "AI visibility and automation agency installing GEO, AI Voice Agent, and Operations Intelligence into US home service businesses so they get recommended by ChatGPT, Perplexity, and Google AI Overview.",
  "founder": {
    "@type": "Person",
    "name": "Abdelghani Mellal"
  },
  "foundingDate": "2026",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Generative Engine Optimization",
    "AI Voice Agent",
    "Operations Intelligence"
  ],
  "priceRange": "$700 - $2997",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://unbacked.agency/contact"
  },
  "sameAs": [
    "https://www.linkedin.com/company/unbacked"
  ]
}
</script>`;

const files = walkSync('.');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  if (file.endsWith('.html')) {
    // 1. Replace the Organization Schema
    // This looks for exactly the comment and the following script tag.
    let added = false;
    content = content.replace(/<!--\s*Organization Schema\s*-->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/i, () => {
      added = true;
      return `<!-- Organization & ProfessionalService Schema -->\n    ${newSchema}`;
    });

    // 2. Remove the Global Schema block entirely if it exists (index.html had it)
    content = content.replace(/<!--\s*Global Schema\s*-->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/i, '');
  }

  // 3. Fix "Founded: 2024" strings in HTML and TXT files
  content = content.replace(/Founded: 2024/g, "Founded: 2026");
  
  // 4. Just in case, fix `"foundingDate": "2024"` strings
  content = content.replace(/"foundingDate":\s*"2024"/g, '"foundingDate": "2026"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    changedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log('Total files changed:', changedCount);
