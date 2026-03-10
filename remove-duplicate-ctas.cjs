const fs = require('fs');
const path = require('path');

// 1. WhatsApp Button Removal from footer.js
const footerPath = path.join('src', 'components', 'footer.js');
if (fs.existsSync(footerPath)) {
    let footerContent = fs.readFileSync(footerPath, 'utf8');
    
    // The WhatsApp button block is uniquely identified by the wa.me link
    const waRegex = /<!-- Floating WhatsApp Button -->\s*<a href="https:\/\/wa\.me\/213799767241"[\s\S]*?<\/a>\s*$/;
    
    if (waRegex.test(footerContent)) {
        footerContent = footerContent.replace(waRegex, '');
        fs.writeFileSync(footerPath, footerContent);
        console.log('Removed WhatsApp button from footer.js');
    } else {
        console.log('WhatsApp button regex failed in footer.js');
    }
}

// 2. Duplicate ghost CTA Removal from all HTML files
const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    }
    else {
      if (file.endsWith('.html')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const htmlFiles = walkSync('.');

// Look for a link containing boundary classes of the outline/ghost button
// "border border-brand-border hover:border-brand-gray text-white" 
// followed by the CTA text
const ghostButtonRegex = /<a[^>]*class="[^"]*border border-brand-border[^"]*text-white[^"]*"[^>]*>\s*WATCH THE SYSTEM LIVE — BOOK 15 MINUTES &rarr;\s*<\/a>\s*/gi;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (ghostButtonRegex.test(content)) {
        content = content.replace(ghostButtonRegex, '');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Removed duplicate CTA from ${file}`);
    }
});
