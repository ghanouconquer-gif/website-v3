const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    const stats = fs.statSync(dirFile);
    if (stats.isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.git') && !dirFile.includes('.next') && !dirFile.includes('dist')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.html')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const newSchema = `<!-- Organization & Service Schema -->
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "OnlineBusiness"],
      "@id": "https://unbacked.agency/#organization",
      "name": "UNBACKED",
      "legalName": "UNBACKED Agency",
      "url": "https://unbacked.agency",
      "logo": "https://unbacked.agency/logo.png",
      "description": "AI visibility and automation agency installing GEO, AI Voice Agent, and Operations Intelligence into US home service businesses so they get recommended by ChatGPT, Perplexity, and Google AI Overview.",
      "foundingDate": "2026",
      "founder": {
        "@type": "Person",
        "name": "Abdelghani Mellal",
        "jobTitle": "Founder",
        "sameAs": "https://www.wikidata.org/wiki/Q138631081"
      },
      "sameAs": [
        "https://www.linkedin.com/company/unbacked",
        "https://www.wikidata.org/wiki/Q138629327"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": "https://unbacked.agency/contact",
        "availableLanguage": ["English"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States",
        "sameAs": "https://www.wikidata.org/wiki/Q30"
      },
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization",
          "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"
        },
        {
          "@type": "Thing",
          "name": "Artificial Intelligence",
          "sameAs": "https://www.wikidata.org/wiki/Q11660"
        },
        {
          "@type": "Thing",
          "name": "Home Services",
          "sameAs": "https://www.wikidata.org/wiki/Q1372064"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://unbacked.agency/#service-geo",
      "name": "Generative Engine Optimization",
      "provider": {
        "@id": "https://unbacked.agency/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States",
        "sameAs": "https://www.wikidata.org/wiki/Q30"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$700 - $2997",
        "priceCurrency": "USD"
      }
    }
  ]
}
</script>`;

const files = walkSync('.');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace the Organization & ProfessionalService Schema block
  content = content.replace(
    /<!--\s*Organization\s*(?:&|&amp;)\s*(?:ProfessionalService|Service)\s*Schema\s*-->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    newSchema
  );

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    changedCount++;
    console.log('Updated', file);
  } else {
    console.log('SKIPPED (no match)', file);
  }
});

console.log('Total files changed:', changedCount);
