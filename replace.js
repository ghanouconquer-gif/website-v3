const fs = require('fs');
const content = fs.readFileSync('ai-visibility-audit/index.html', 'utf8');

// replace title
const h3Start = content.indexOf('<h3 class="text-2xl font-bold text-white mb-2">Request Your Audit</h3>');
let newContent = content.replace(
    '<h3 class="text-2xl font-bold text-white mb-2">Request Your Audit</h3>',
    '<h3 class="text-2xl font-bold text-white mb-2">Book Your 15-Minute Demo</h3>'
);

const pStart = newContent.indexOf('<p class="text-brand-gray text-sm mb-8">We will record');
const pEnd = newContent.indexOf('</p>', pStart);
const pTextToReplace = newContent.substring(pStart, pEnd + 4);
const newP = '<p class="text-brand-gray text-sm mb-8">Pick a time below. We will run your domain live on the call and show you exactly where your AI visibility gaps are.</p>';
newContent = newContent.replace(pTextToReplace, newP);

const formStart = newContent.indexOf('<form class="space-y-6"');
const formEnd = newContent.indexOf('</form>', formStart);
const formTextToReplace = newContent.substring(formStart, formEnd + 7);

const newForm = `<!-- Calendly inline widget begin -->
                    <div class="calendly-inline-widget" data-url="https://calendly.com/unbackedagency" style="min-width:320px;height:700px;"></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                    <!-- Calendly inline widget end -->`;

newContent = newContent.replace(formTextToReplace, newForm);

fs.writeFileSync('ai-visibility-audit/index.html', newContent);
console.log('DONE REPLACEMENT');
