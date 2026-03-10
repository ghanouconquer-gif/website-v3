const fs = require('fs');

// 1. index.html
let index = fs.readFileSync('index.html', 'utf8');

// index.html FAQ and schema
index = index.replace(/You can book an evaluation on the contact page or message the deployment team directly via WhatsApp\./g, 'You can book an evaluation on the contact page.');

// index.html floating/pre-footer whatsapp btn
const indexBtnRegex = /<div class="mt-16 text-center">\s*<a href="https:\/\/wa\.me\/213799767241" target="_blank"[\s\S]*?Message Us on WhatsApp\s*<\/a>\s*<\/div>/i;
index = index.replace(indexBtnRegex, '');
fs.writeFileSync('index.html', index);


// 2. contact/index.html
let contact = fs.readFileSync('contact/index.html', 'utf8');

contact = contact.replace(/Book a discovery call or message via WhatsApp\./g, 'Book a discovery call.');
contact = contact.replace(/including phone, WhatsApp, and discovery call booking/g, 'including discovery call booking and form submission');
contact = contact.replace(/<li>&bull; Contact Methods: WhatsApp \(Fastest\), Calendar Booking, Asynchronous Form<\/li>/g, '<li>&bull; Contact Methods: Calendar Booking, Asynchronous Form</li>');
contact = contact.replace(/UNBACKED offers three ways to initiate your AI infrastructure upgrade\. You can message our deployment team directly on WhatsApp for immediate technical questions, book a 30-minute/g, 'UNBACKED offers two ways to initiate your AI infrastructure upgrade. You can book a 30-minute');
// remove the WhatsApp option block entirely
const contactOptionRegex = /<!-- Option 1: WhatsApp -->[\s\S]*?<\/a>\s*<\/div>/i;
contact = contact.replace(contactOptionRegex, '');
// grid update
contact = contact.replace(/grid-cols-1 md:grid-cols-3 gap-8/g, 'grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl');
// form submit handler
contact = contact.replace(/window\.location\.href='https:\/\/wa\.me\/213799767241';/g, 'window.location.href=\'/contact/\';');

fs.writeFileSync('contact/index.html', contact);


// 3. ai-visibility-audit/index.html
let audit = fs.readFileSync('ai-visibility-audit/index.html', 'utf8');
audit = audit.replace(/window\.location\.href='https:\/\/wa\.me\/213799767241';/g, 'window.location.href=\'/contact/\';');
const fastTrackRegex = /<p class="text-xs text-brand-gray font-mono text-center">Fast-track via <a[\s\S]*?WhatsApp<\/a><\/p>/gi;
audit = audit.replace(fastTrackRegex, '');
fs.writeFileSync('ai-visibility-audit/index.html', audit);


// 4. blog/hvac-market-2026/index.html
let blog1 = fs.readFileSync('blog/hvac-market-2026/index.html', 'utf8');
const contactTxtRegex1 = /Contact: <a href="https:\/\/wa\.me\/213799767241"[^>]*>wa\.me\/213799767241<\/a> \| /g;
blog1 = blog1.replace(contactTxtRegex1, '');
fs.writeFileSync('blog/hvac-market-2026/index.html', blog1);


// 5. blog/best-hvac-marketing-agencies-2026/index.html
let blog2 = fs.readFileSync('blog/best-hvac-marketing-agencies-2026/index.html', 'utf8');
blog2 = blog2.replace(contactTxtRegex1, '');
const contactTxtRegex2 = /Contact: <a href="https:\/\/wa\.me\/213799767241".*?wa\.me\/213799767241<\/a>/g;
blog2 = blog2.replace(contactTxtRegex2, '');
fs.writeFileSync('blog/best-hvac-marketing-agencies-2026/index.html', blog2);

console.log('Textual references eradicated.');
