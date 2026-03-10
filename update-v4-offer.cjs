const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
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
const newCtaText = 'WATCH THE SYSTEM LIVE — BOOK 15 MINUTES &rarr;';
const oldCtaTexts = [
    'BOOK YOUR FREE AI VISIBILITY AUDIT',
    'Book Your Free AI Visibility Audit',
    'GET YOUR FREE 9-PILLAR SCORE',
    'Get Your Free 9-Pillar Score',
    'Get your free AI visibility score &rarr;' // Handle variations
];

// --- PART 2: UNIFY CTAs GLOBALLY ---
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // 1. Replace primary text inside standard buttons
    // The previous text could be wrapped in span or plain text.
    oldCtaTexts.forEach(oldText => {
        const regex1 = new RegExp(`<span class="relative z-10">${oldText}<\\/span>`, 'g');
        if (regex1.test(content)) {
            content = content.replace(regex1, `<span class="relative z-10">${newCtaText}</span>`);
            changed = true;
        }
        const regex2 = new RegExp(`>\\s*${oldText}\\s*<\\/a>`, 'g');
        if (regex2.test(content)) {
            content = content.replace(regex2, `>\n      ${newCtaText}\n    </a>`);
            changed = true;
        }
        const regex3 = new RegExp(`>\\s*${oldText}\\s*<\\/button>`, 'g');
        if (regex3.test(content)) {
            content = content.replace(regex3, `>\n      ${newCtaText}\n    </button>`);
            changed = true;
        }
    });

    // 2. Remove all "GET YOUR FREE 9-PILLAR SCORE" standalone buttons or ghost buttons next to primary CTAs
    // In index.html hero:
    const heroDualCtaRegex = /<a href="\/ai-visibility-audit\/"[^>]*>\s*(?:Get Your Free 9-Pillar Score|GET YOUR FREE 9-PILLAR SCORE)\s*<\/a>\s*(<a href="\/contact\/"[^>]*>[\s\S]*?<\/a>)/i;
    if (heroDualCtaRegex.test(content)) {
        content = content.replace(heroDualCtaRegex, '$1');
        changed = true;
    }

    // In about/index.html hero:
    const aboutDualCtaRegex = /<a href="\/what-we-do\/"[^>]*>\s*See How The System Works\s*<\/a>\s*(<a href="\/contact\/"[^>]*>[\s\S]*?<\/a>)/i;
    if (aboutDualCtaRegex.test(content)) {
        content = content.replace(aboutDualCtaRegex, '$1');
        changed = true;
    }

    // In pre-footer CTAs
    const prefooterRegex = /<h2 class="heading-condensed text-4xl mb-6">Test the System Yourself<\/h2>\s*<p class="text-brand-gray mb-8">Run your domain through our 9-Pillar AI Visibility tool\.<\/p>\s*<a href="\/contact\/"[^>]*>[\s\S]*?<\/a>/;
    const newPrefooter = `<h2 class="heading-condensed text-4xl mb-6">Test the System Yourself</h2>
    <p class="text-brand-gray mb-8">Run your domain through our 9-Pillar AI Visibility tool.</p>
    <a href="/contact/"
      class="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-[#00FF94] text-black font-bold hover:brightness-110 transition-all inline-block">
      ${newCtaText}
    </a>`;
    if (prefooterRegex.test(content)) {
        content = content.replace(prefooterRegex, newPrefooter);
        changed = true;
    }

    // Secondary CTA in what-we-do hero
    const whatWeDoCtaRegex = /<a href="\/ai-voice-agent\/"[^>]*>\s*Explore the Voice Agent\s*<\/a>\s*(<a href="\/contact\/"[^>]*>[\s\S]*?<\/a>)/i;
    if (whatWeDoCtaRegex.test(content)) {
         content = content.replace(whatWeDoCtaRegex, '$1');
         changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Updated CTAs in ${file}`);
    }
});

// --- PART 1: UPDATE OFFER COPY ON index.html ---
let index = fs.readFileSync('index.html', 'utf8');

// 1. Hero Subcopy
const heroSubcopyRegex = /You\'ve built a reputation worth recommending\. The problem is the infrastructure AI uses to decide who to\s*recommend — and it was built without you\. We fix that\./;
const newHeroSubcopy = `You've built a reputation worth recommending. The problem is the infrastructure AI uses to decide who to recommend — and it was built without you. We fix that.<br><br>
        We call a live test number on a video call.<br>
        You watch the AI answer, book a real appointment,<br>
        send a confirmation email, and log the record — in real time.<br>
        Total time: 15 minutes.<br>
        The only question after that is: how fast can we swap the credentials<br>
        to your accounts.`;
index = index.replace(heroSubcopyRegex, newHeroSubcopy);

// 2. Scarcity updates
// Replace "System Version 4.0 // Accepting Beta Partners" with Scarcity line
const betaBadgeRegex = /System Version \d\.\d \/\/ Accepting Beta Partners/;
index = index.replace(betaBadgeRegex, "Maximum 2 founding partner slots open right now. Beta closes after the 3rd published case study.");

// 3. Value Stack
const oldStackRegex = /<dl class="space-y-[^>]*>[\s\S]*?<\/dl>\s*<div class="flex justify-between items-end">\s*<span[^>]*>System Price<\/span>\s*<span[^>]*>\$2,997<\/span>\s*<\/div>\s*<p[^>]*>Standard terms: \$700 deposit to start, remaining \$2,297 due upon successful delivery\.<\/p>\s*<div class="mt-6 pt-6 border-t border-brand-border">\s*<div[^>]*>\s*<span[^>]*>Beta Rate<\/span>\s*<span[^>]*>\$700 total<\/span>\s*<\/div>\s*<p[^>]*>Beta partners pay a single flat \$700 fee — no second payment\. This is not a deposit; it is the full price\. Strictly limited availability while we build our first paid case studies\.<\/p>\s*<\/div>/;

const newStack = `<dl class="space-y-3 font-mono text-xs text-brand-gray mb-6">
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>9-Pillar AI Visibility Audit</dt><dd>$2,500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Competitor Citation Audit (BONUS)</dt><dd>$500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>GEO-Optimized Website Build</dt><dd>$4,500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Knowledge Graph Submission</dt><dd>$500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Monthly Citation Tracking</dt><dd>$1,000/mo</dd></div>
              
              <div class="pt-4 flex justify-between border-b border-brand-border pb-2"><dt>AI Voice Agent (5 live tools)</dt><dd>$2,500</dd></div>
              <div class="flex justify-between border-b border-brand-border border-dashed pb-2 text-brand-gray/70"><dt>— Book / Cancel / Reschedule flows</dt><dd>included</dd></div>
              <div class="flex justify-between border-b border-brand-border border-dashed pb-2 text-brand-gray/70"><dt>— Returning Customer Recognition</dt><dd>included</dd></div>
              <div class="flex justify-between border-b border-brand-border border-dashed pb-2 text-brand-gray/70"><dt>— Human Handoff + Emergency Routing</dt><dd>included</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2 text-brand-gray/70"><dt>— Lead Logging + Call Summary</dt><dd>included</dd></div>

              <div class="pt-4 flex justify-between border-b border-brand-border pb-2"><dt>No-Show Handler</dt><dd>$1,500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Unconverted Lead Follow-Up</dt><dd>$1,500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Cancelled Appointment Rebook Campaign</dt><dd>$1,500</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Job Completion + Review Request Trigger</dt><dd>$700</dd></div>
              <div class="flex justify-between border-b border-brand-border pb-2"><dt>Weekly Operations Report</dt><dd>$800/mo</dd></div>
            </dl>
            <div class="flex justify-between items-end mb-2">
              <span class="font-bold text-white uppercase text-sm">Total Setup Value</span>
              <span class="text-xl font-bold text-white">$16,200</span>
            </div>
            <div class="flex justify-between items-end mb-6">
              <span class="font-bold text-white uppercase text-sm">Total Ongoing Value</span>
              <span class="text-xl font-bold text-white">$2,200/mo</span>
            </div>
            <div class="mt-6 pt-6 border-t border-brand-border">
              <div class="flex justify-between items-center bg-brand-dark p-4 rounded border border-brand-border mb-2">
                <span class="font-bold text-white uppercase text-sm">YOUR PRICE TODAY</span>
                <span class="text-xl font-bold text-white">$700</span>
              </div>
              <div class="flex justify-between items-center bg-brand-dark p-4 rounded border border-brand-border mb-2">
                <span class="font-bold text-white uppercase text-[10px]">SECOND PAYMENT (day 60)</span>
                <span class="text-sm font-bold text-white">$2,297</span>
              </div>
              <div class="flex justify-between items-center bg-[#00FF94]/10 p-4 rounded border border-[#00FF94]/30">
                <span class="font-bold text-[#00FF94] uppercase text-sm">TOTAL</span>
                <span class="text-2xl font-bold text-[#00FF94]">$2,997</span>
              </div>
              <p class="text-[10px] text-brand-gray mt-4 leading-tight">Two items have been removed from earlier versions of this offer: Workflow Mapping Session and Seasonal Reactivation. They were not in the built system. They are not in this offer. We only promise what exists.</p>
            </div>`;

if(oldStackRegex.test(index)) {
    index = index.replace(oldStackRegex, newStack);
} else {
    // try a more permissive regex if first fails
    index = index.replace(/<dl class="space-y-3 font-mono text-xs text-brand-gray mb-6">[\s\S]*?Strictly limited availability while we build our first paid case studies\.<\/p>\s*<\/div>/, newStack);
}

// 4. Pricing Copy (left side)
const pricingCopyRegex = /<h2 class="heading-condensed text-4xl mb-6">The Investment<\/h2>\s*<p class="text-brand-gray mb-8">We charge a one-time setup fee for the system installation\. No retainers\. No\s*ad spend required\.<\/p>/;
const newPricingCopy = `<h2 class="heading-condensed text-4xl mb-6">Founding Partner Beta — 2 Slots Remaining</h2>
          <div class="text-brand-gray mb-8 space-y-4 leading-relaxed">
            <p><strong class="text-white">$700 today.</strong><br>Covers: full audit, GEO website build, voice agent deployment, all 10 automation workflows, and knowledge graph submission.</p>
            <p><strong class="text-white">$2,297 at day 60 — triggered by whichever comes first:</strong><br>
            a) Your business cited in at least 1 AI response, OR<br>
            b) Your voice agent has answered at least 10 real calls, OR<br>
            c) 60 days elapsed since go-live — whichever is first.</p>
            <p class="text-[#00FF94]">If none of those three happen by day 90:<br>the $2,297 is waived entirely.<br>You keep everything that was built. No charge.</p>
            <p>This structure exists because we are building our first case studies. We need the result more than we need the second payment. That alignment is why the guarantee is real.</p>
          </div>
          <p class="text-xs text-brand-gray leading-relaxed mb-6 border-t border-brand-border pt-6">For reference: a GEO-only retainer from any agency in this space starts at $2,000–$3,000/month. This is $2,997 total — one payment structure, split in two — and includes GEO, a live AI voice agent, and a full operations automation stack. You would pay more buying just one of the three layers anywhere else.</p>
          <p class="font-bold text-white text-sm">Maximum 2 founding partner slots open right now.<br>Beta closes after the 3rd published case study.<br>After that: $2,997/month. No guarantee. No exceptions.</p>`;
index = index.replace(pricingCopyRegex, newPricingCopy);


// 5. Guarantee Section
const guaranteeRegex = /<h2 class="heading-condensed text-4xl mb-6">The Ironclad Guarantee<\/h2>\s*<div class="border-l-4 border-\[#00FF94\] pl-6 py-2">[\s\S]*?<\/dl>\s*<\/div>/;
const newGuarantee = `<h2 class="heading-condensed text-4xl mb-6 uppercase">The 90-Day Guarantee</h2>
          <div class="border-l-4 border-[#00FF94] pl-6 py-2 mb-8 text-brand-gray space-y-4">
            <p class="text-lg text-white mb-2">90 days after your system goes live, we run 5 commercial-intent AI queries in your service area:</p>
            <p class="font-mono text-sm pl-4 border-l border-brand-border">
              'Who is the best [trade] company in [your city]?'<br>
              'Emergency [trade] repair near me'<br>
              'Trusted [trade] in [your city]'<br>
              Plus 2 more tailored to your specific trade and city.
            </p>
            <p class="font-bold text-[#00FF94] text-lg mt-4">If your business does not appear in at least 2 of those 5 queries: work continues at no additional charge until it does. No time limit. No asterisks.</p>
          </div>

          <div class="mt-8 bg-brand-black p-6 border border-brand-border rounded">
            <h3 class="font-mono text-sm text-[#00FF94] uppercase mb-4">Three things required from you:</h3>
            <ol class="text-brand-gray text-sm leading-relaxed space-y-3 font-mono list-decimal pl-5">
              <li>Keep the deployed website live and accessible.</li>
              <li>Complete the Google Business Profile checklist at onboarding. (30 minutes.)</li>
              <li>Forward the review request to at least 10 recent customers.</li>
            </ol>
            <p class="mt-6 text-white text-sm font-bold border-t border-brand-border pt-4">Do those three things and still don't appear in 2 of 5 queries at day 90: we keep working for free.</p>
          </div>`;
index = index.replace(guaranteeRegex, newGuarantee);

fs.writeFileSync('index.html', index);
console.log('index.html major sections updated.');

// --- PART 3: UPDATE TIMELINE ON what-we-do/index.html ---
let whatWeDo = fs.readFileSync('what-we-do/index.html', 'utf8');
const timelineRegex = /<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">[\s\S]*?<!-- Comparison Table -->/g;
const newTimelineHtml = `<div class="bg-brand-black border border-brand-border rounded overflow-hidden">
                <dl class="divide-y divide-brand-border/50 text-brand-gray font-mono text-sm">
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Day 1:</dt>
                        <dd class="md:w-3/4">Onboarding call (30 min). Credentials swapped. Audit begins.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Days 1–3:</dt>
                        <dd class="md:w-3/4">9-Pillar Audit + Competitor Citation Audit delivered.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Days 3–7:</dt>
                        <dd class="md:w-3/4">GEO website built. Knowledge graph submitted. Platforms claimed.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Days 7–10:</dt>
                        <dd class="md:w-3/4">Voice agent trained. All 10 workflows connected to your accounts.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 bg-[#00FF94]/5 border-y border-[#00FF94]/20 group">
                        <dt class="md:w-1/4 font-bold text-white mb-2 md:mb-0">Days 10–14:</dt>
                        <dd class="md:w-3/4 text-white">Full system tested with live calls. You approve. System goes live.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-[#00FF94] mb-2 md:mb-0">Day 14:</dt>
                        <dd class="md:w-3/4 text-[#00FF94]">Voice agent answering calls. Automations running. Clock starts.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Day 60:</dt>
                        <dd class="md:w-3/4 text-white">Citation check + second payment trigger.</dd>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 hover:bg-[#00FF94]/5 transition-colors group">
                        <dt class="md:w-1/4 font-bold text-white group-hover:text-[#00FF94] mb-2 md:mb-0">Day 90:</dt>
                        <dd class="md:w-3/4 text-white">Guarantee fulfilled or work continues free.</dd>
                    </div>
                </dl>
            </div>
        </div>
    </article>

    <!-- Comparison Table -->`;
if(timelineRegex.test(whatWeDo)){
    whatWeDo = whatWeDo.replace(timelineRegex, newTimelineHtml);
    fs.writeFileSync('what-we-do/index.html', whatWeDo);
    console.log('what-we-do/index.html timeline updated.');
} else {
    console.log('Could not find timeline in what-we-do/index.html');
}
