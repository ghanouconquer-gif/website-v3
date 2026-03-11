const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'blog', 'angi-vs-thumbtack-for-hvac-2026', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const newBody = `
                        <div class="bg-brand-dark border border-brand-border p-6 rounded mb-12 text-left overflow-x-auto">
                            <h3 class="font-mono text-sm text-[#00FF94] uppercase tracking-widest mb-4">KEY FACTS</h3>
                            <table class="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr class="border-b border-white/10 text-brand-gray font-mono uppercase tracking-widest text-xs">
                                        <th class="py-3 px-2">Metric</th>
                                        <th class="py-3 px-2">Data</th>
                                    </tr>
                                </thead>
                                <tbody class="text-brand-gray">
                                    <tr class="border-b border-white/5">
                                        <td class="py-3 px-2 text-white">Angi annual membership fee</td>
                                        <td class="py-3 px-2 font-mono text-red-400">~$300/year</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-3 px-2 text-white">Angi per-lead cost</td>
                                        <td class="py-3 px-2 font-mono text-red-400">$15–$100+ depending on trade</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-3 px-2 text-white">Angi lead sharing</td>
                                        <td class="py-3 px-2 font-mono text-red-400">Sent to 3–8 competitors</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-3 px-2 text-white">True cost per booked job on Angi</td>
                                        <td class="py-3 px-2 font-mono text-red-400">$1,400–$2,500</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-3 px-2 text-white">Google LSA conversion rate</td>
                                        <td class="py-3 px-2 font-mono text-[#00FF94]">~31%</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-2 text-white">Nextdoor peer trust rate</td>
                                        <td class="py-3 px-2 font-mono text-[#00FF94]">94% of users</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="1-how-angi-works" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">1. How Angi Works for Contractors</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6"><strong>Angi is a high-volume directory that sells the same lead to multiple contractors at once. It can generate call volume when you're slow, but the economics are punishing — especially for trades where speed-to-response determines everything.</strong></p>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">Angi (formerly Angie's List and HomeAdvisor, merged) operates on a <a href="https://www.leadtruffle.co/blog/angi-leads-cost-pricing-contractors-2026/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">pay-per-lead model where leads are routinely shared among 3 to 8 competing contractors</a> the moment a homeowner submits a request. To access the lead feed at all, contractors pay <a href="https://www.leadtruffle.co/blog/angi-leads-cost-pricing-contractors-2026/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">an annual membership fee of approximately $300</a>, plus <a href="https://7ten.marketing/how-much-does-angies-list-cost-for-contractors/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">a per-lead cost of $15 to $85 — sometimes $100 or higher in competitive trades</a> like HVAC or electrical.</p>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">The sticker price on each lead sounds manageable. The true cost doesn't. When you factor in that the same contact is being worked by multiple competitors, and that most shared leads don't convert, the <a href="https://www.leadtruffle.co/blog/complete-guide-angi-leads-home-service-contractors-2026/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">real cost per booked job on Angi runs $1,400 to $2,500</a> — four to five times higher than SEO or Google Ads.</p>

                        <p class="text-lg leading-relaxed text-brand-gray mb-6">There's also a contract problem. <a href="https://www.leadtruffle.co/blog/angi-leads-cost-pricing-contractors-2026/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">Angi typically uses 12-month contracts with 30–35% early cancellation penalties</a> and 60 days' notice required to exit. You're locked in before you've measured whether the leads actually close.</p>

                        <blockquote class="bg-brand-dark border-l-4 border-[#00FF94] p-6 my-8">
                            <p class="italic text-white text-lg">"True cost per booked customer through Angi reaches $1,400–$2,500 when accounting for shared lead competition and close rates. One marketing agency's analysis found Angi's cost per acquisition runs 4–5× higher than SEO or Google Ads."</p>
                            <p class="mt-4 font-mono text-xs uppercase text-brand-gray">— LeadTruffle, January 2026</p>
                        </blockquote>

                        <h2 id="2-how-thumbtack-works" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">2. How Thumbtack Works for Contractors</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6"><strong>Thumbtack gives contractors more budget control and less platform lock-in than Angi — but it covers everything from HVAC to wedding photography, which dilutes the home-service focus you actually need.</strong></p>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">Thumbtack runs as a <a href="https://phonestaffer.com/best-lead-generation-companies-for-contractors/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">flexible pay-per-contact marketplace</a>. Instead of annual subscriptions, pros set weekly budgets and maximum lead prices — and <a href="https://phonestaffer.com/best-lead-generation-companies-for-contractors/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">only pay when a potential customer initiates a conversation</a>. That makes it easier to pause spend during your busy season and restart when you need volume.</p>

                        <p class="text-lg leading-relaxed text-brand-gray mb-6">One meaningful difference from Angi: <a href="https://phonestaffer.com/best-lead-generation-companies-for-contractors/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">Thumbtack limits the number of professionals a homeowner can contact for a single job</a>. The tradeoff is platform breadth. Thumbtack covers event planning and photography alongside home services.</p>

                        <h2 id="3-side-by-side" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">3. Angi vs. Thumbtack: Side-by-Side Comparison</h2>
                        
                        <div class="overflow-x-auto my-8">
                            <table class="w-full text-left border-collapse min-w-[600px] border border-brand-border text-sm font-mono">
                                <thead>
                                    <tr class="bg-brand-dark border-b border-brand-border text-[#00FF94] uppercase tracking-widest">
                                        <th class="p-4">Factor</th>
                                        <th class="p-4 border-l border-brand-border">Angi</th>
                                        <th class="p-4 border-l border-brand-border">Thumbtack</th>
                                    </tr>
                                </thead>
                                <tbody class="text-brand-gray text-white">
                                    <tr class="border-b border-brand-border">
                                        <td class="p-4">Primary model</td>
                                        <td class="p-4 border-l border-brand-border">Directory + pay-per-lead</td>
                                        <td class="p-4 border-l border-brand-border">Pay-per-contact matching</td>
                                    </tr>
                                    <tr class="border-b border-brand-border bg-brand-black/50">
                                        <td class="p-4">Contract required</td>
                                        <td class="p-4 border-l border-brand-border text-red-400">Yes — 12 mos + penalties</td>
                                        <td class="p-4 border-l border-brand-border text-[#00FF94]">No — flexible weekly</td>
                                    </tr>
                                    <tr class="border-b border-brand-border">
                                        <td class="p-4">Lead sharing</td>
                                        <td class="p-4 border-l border-brand-border">3–8 contractors per lead</td>
                                        <td class="p-4 border-l border-brand-border">Fewer competitors</td>
                                    </tr>
                                    <tr class="border-b border-brand-border bg-brand-black/50">
                                        <td class="p-4">True cost per job</td>
                                        <td class="p-4 border-l border-brand-border text-red-400">$1,400–$2,500</td>
                                        <td class="p-4 border-l border-brand-border">Variable by budget</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="4-google-lsa" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">4. Why Google Local Services Ads Beat Both</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">Unlike Angi or Thumbtack, <a href="https://adaptdigitalsolutions.com/articles/homeadvisor-vs-angieslist-vs-houzz-vs-porch-vs-thumbtack-vs-yelp-vs-bark/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">LSA leads are exclusive to your business</a>. When a homeowner searches "HVAC repair near me" and calls from an LSA listing, that call goes to you and only you. <a href="https://crftsmn.com/roi-of-google-ads-or-leads-platforms/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">LSAs convert leads to customers at approximately 31%</a> — compared to the 8–15% typically seen on shared-lead platforms.</p>

                        <p class="text-lg leading-relaxed text-brand-gray mb-6">The Google Verified badge increases click-through rates by 210%. LSA cost per lead ranges from $25 to $300 depending on trade. When you compare that against Angi's effective cost, the math is clear. You should prioritize <a href="/geo-for-home-services/" class="text-[#00FF94] hover:underline">building an AI search visibility system</a> and optimizing your Google Business Profile before paying for third-party leads.</p>

                        <h2 id="5-google-business-profile" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">5. Your Google Business Profile: The Free Foundation</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">Experts consistently recommend starting with a free Google Business Profile as the highest-ROI lead source for contractors. <a href="/geo-for-home-services/" class="text-[#00FF94] hover:underline">GBP optimization is a core part of any AI visibility setup</a> because AI search platforms like ChatGPT and Perplexity pull business data directly from Google Maps and local listings.</p>

                        <h2 id="6-nextdoor" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">6. Nextdoor for Hyper-Local Trust</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6"><a href="https://makdigitaldesign.com/search-engine-optimization/nextdoor-local-business-advertising/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">94% of Nextdoor users trust peer recommendations on the platform</a>. When a neighbor recommends your roofing company in a local group, that endorsement carries the weight of a personal referral. You can create a free business page on Nextdoor to engage directly with local residents.</p>

                        <h2 id="7-buildzoom" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">7. BuildZoom: For Large Remodels and New Construction</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6"><a href="https://fatcatstrategies.com/marketing/12-better-than-homeadvisor-lead-sources-contractors-trust-in-2026/" target="_blank" rel="noopener" class="text-[#00FF94] hover:underline">BuildZoom caters specifically to major projects with budgets over $150,000 and uses a pay-for-results model where you only pay a 2.5% referral fee after successfully winning the job</a>. There's no ongoing fee if you don't close.</p>

                        <h2 id="8-which-platform" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">8. Which Platform Is Right for Your Business?</h2>
                        
                        <div class="overflow-x-auto my-8">
                            <table class="w-full text-left border-collapse min-w-[600px] border border-brand-border text-sm font-mono">
                                <thead>
                                    <tr class="bg-brand-dark border-b border-brand-border text-[#00FF94] uppercase tracking-widest">
                                        <th class="p-4 w-1/2">Business Profile</th>
                                        <th class="p-4 border-l border-brand-border w-1/2">Recommended Channel</th>
                                    </tr>
                                </thead>
                                <tbody class="text-brand-gray text-white">
                                    <tr class="border-b border-brand-border">
                                        <td class="p-4">Solo operator, flexible budget</td>
                                        <td class="p-4 border-l border-brand-border font-bold">Thumbtack</td>
                                    </tr>
                                    <tr class="border-b border-brand-border bg-brand-black/50">
                                        <td class="p-4">Established team, fast dispatcher</td>
                                        <td class="p-4 border-l border-brand-border font-bold">Google LSA + GBP</td>
                                    </tr>
                                    <tr class="border-b border-brand-border">
                                        <td class="p-4">High-ticket projects ($150K+)</td>
                                        <td class="p-4 border-l border-brand-border font-bold">BuildZoom</td>
                                    </tr>
                                    <tr class="border-b border-brand-border bg-brand-black/50">
                                        <td class="p-4">Neighborhood repeat business</td>
                                        <td class="p-4 border-l border-brand-border font-bold">Nextdoor</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="9-missed-calls" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">9. The Hidden Cost: Missed Calls</h2>
                        
                        <p class="text-lg leading-relaxed text-brand-gray mb-6">It doesn't matter which platform generates your lead if no one answers when they call. A typical home service company misses roughly 27% of calls. At an average job value of $350, that's $200,200 in recoverable revenue lost yearly. Implementing an <a href="/ai-voice-agent/" class="text-[#00FF94] hover:underline">AI voice agent that answers every call</a> guarantees you never waste the money you just spent buying an Angi lead.</p>

                        <h2 id="10-faq" class="text-3xl font-bold mb-6 pt-8 mt-12 border-t border-brand-border/50">10. FAQ</h2>
                        
                        <div class="space-y-8">
                            <div class="border-b border-brand-border pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">Is Angi worth it for HVAC contractors in 2026?</h3>
                                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <p class="text-brand-gray leading-relaxed" itemprop="text">Angi can generate call volume, but leads are shared with 3–8 competing contractors simultaneously. The true cost per booked job runs $1,400–$2,500. Most experts recommend capping Angi at 10–20% of your total marketing budget and treating it as supplemental — not your main pipeline.</p>
                                </div>
                            </div>
                            
                            <div class="border-b border-brand-border pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">What is the best lead source for home service contractors in 2026?</h3>
                                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <p class="text-brand-gray leading-relaxed" itemprop="text">Experts consistently recommend your Google Business Profile as the highest-ROI lead source because it generates exclusive, high-intent leads at no per-lead cost. Layer Google Local Services Ads on top for paid volume, rather than starting with shared-lead marketplaces.</p>
                                </div>
                            </div>

                            <div class="border-b border-brand-border pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">Is Thumbtack better than Angi?</h3>
                                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <p class="text-brand-gray leading-relaxed" itemprop="text">Thumbtack offers more flexibility than Angi because it doesn't require annual contracts and lets you control your weekly budget limits. However, because it's a general marketplace (wedding DJs alongside plumbers), the lead quality can be lower than specialized home service channels.</p>
                                </div>
                            </div>

                            <div class="border-b border-brand-border pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">Why are Angi leads so expensive?</h3>
                                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <p class="text-brand-gray leading-relaxed" itemprop="text">The stated per-lead cost on Angi ($15–$85) isn't the issue — the problem is the close rate. Because Angi sells the same lead to multiple contractors simultaneously, competition drives close rates down to 8–15%. You have to buy 8–12 leads to book one job, pushing the true cost of acquisition well over $1,000.</p>
                                </div>
                            </div>

                            <div class="border-b border-brand-border pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">Are Google Local Services Ads worth the cost?</h3>
                                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <p class="text-brand-gray leading-relaxed" itemprop="text">Yes. LSAs convert at approximately 31% because the leads are exclusive, intent-driven, and carry the Google Guarantee badge. While the per-lead cost may seem high depending on your market, the cost per booked job is typically much lower than Angi or Thumbtack due to the higher close rate.</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16 bg-brand-dark border border-brand-border p-8 rounded text-left">
                            <h2 class="font-bold text-white mb-4 uppercase text-lg font-mono tracking-widest text-[#00FF94]">About This Page</h2>
                            <p class="text-brand-gray text-lg mb-6 leading-relaxed">This post was written by the UNBACKED Editorial Team. We build done-for-you AI visibility systems and voice agents for home services. We are not affiliated with Angi, Thumbtack, Google, or BuildZoom. All platform statistics are based on third-party reporting, linked inline below.</p>
                            <p class="text-brand-gray text-lg font-mono text-sm mb-6">Website: <a href="https://unbacked.agency" class="text-[#00FF94] hover:underline">unbacked.agency</a></p>
                        </div>

                        <div class="mt-8 border-t border-brand-border pt-8">
                            <p class="font-mono text-xs text-brand-gray italic">Last updated: March 2026. All statistics linked to primary sources.</p>
                        </div>

                        <div class="mt-16 pt-12 text-center text-center">
                            <h2 class="text-3xl font-bold text-white mb-6">Stop buying shared leads. Become the business AI recommends.</h2>
                            <p class="mb-8 max-w-lg mx-auto text-brand-gray text-lg">UNBACKED builds done-for-you AI visibility systems and voice agents for home services.</p>
                            <a href="/contact/"
                                class="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-[#00FF94] text-black font-bold hover:brightness-110 transition-all inline-block">
                                WATCH THE SYSTEM LIVE — BOOK 15 MINUTES &rarr;
                            </a>
                        </div>
`;

// Extract before prose
const proseStart = '<div class="prose prose-invert prose-brand max-w-none">';
const mainEnd = '</div> <!-- End Main Content Column -->';

const parts = content.split(proseStart);
if (parts.length < 2) throw new Error("Could not find prose start");

const beforeProse = parts[0] + proseStart;

const parts2 = parts[1].split(mainEnd);
if (parts2.length < 2) throw new Error("Could not find main end");

// We only replace the content between proseStart and mainEnd.
const afterProse = '\\n                    </div>\\n                ' + mainEnd + parts2[1];

const newHtml = beforeProse + newBody + afterProse;

fs.writeFileSync(filePath, newHtml);
console.log("Successfully replaced body!");
