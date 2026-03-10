const fs = require('fs');
const path = require('path');

// 1. WhatsApp Button Removal from footer.js
const footerPath = path.join('src', 'components', 'footer.js');
if (fs.existsSync(footerPath)) {
    let footerContent = fs.readFileSync(footerPath, 'utf8');
    
    const waRegex = /<!-- Floating WhatsApp Button -->[\s\S]*?<\/a>/i;
    
    if (waRegex.test(footerContent)) {
        footerContent = footerContent.replace(waRegex, '');
        fs.writeFileSync(footerPath, footerContent);
        console.log('Removed WhatsApp button from footer.js');
    } else {
        console.log('WhatsApp button regex failed in footer.js');
    }
}
