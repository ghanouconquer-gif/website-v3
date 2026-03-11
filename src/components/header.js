export const headerHTML = `
<nav class="sticky top-0 z-50 bg-[#080808] px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-sm">
<div class="flex items-center">
<a href="/" class="flex items-center">
  <img src="/unbacked-logo.png?v=2" alt="UNBACKED Logo" class="h-10 md:h-12 w-auto object-contain" />
</a>
</div>
<div class="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
<a href="/what-we-do/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  What We Do
</a>
<a href="/geo-for-home-services/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  GEO for Business
</a>
<a href="/ai-voice-agent/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  AI Voice Agent
</a>
<a href="/ai-visibility-audit/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  AI Visibility Audit
</a>
<a href="/case-studies/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  Case Studies
</a>
<a href="/research/ai-visibility-tampa-hvac/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  Research
</a>
<a href="/about/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  About
</a>
</div>
<div class="flex items-center">
          <button class="hidden md:inline-block bg-brand-blue text-white font-mono text-[10px] md:text-xs px-5 py-2.5 uppercase tracking-widest border border-transparent hover:brightness-110 transition-colors shadow-sm" onclick="window.location.href='/contact/'">
            WATCH THE SYSTEM LIVE — BOOK 15 MINUTES →
          </button>
<button class="ml-4 p-1 md:hidden" id="mobile-menu-btn" aria-label="Toggle menu">
<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8h16M4 16h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</div>
</nav>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 bg-white z-40 hidden items-center justify-center pt-16" style="flex-direction:column">
  <button id="close-menu-btn" class="absolute top-4 right-4 p-2">
    <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
  <a href="/what-we-do/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">What We Do</a>
  <a href="/geo-for-home-services/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">GEO for Business</a>
  <a href="/ai-voice-agent/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">AI Voice Agent</a>
  <a href="/ai-visibility-audit/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">AI Visibility Audit</a>
  <a href="/case-studies/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">Case Studies</a>
  <a href="/research/ai-visibility-tampa-hvac/" class="text-2xl font-bold mb-4 hover:text-gray-500 nav-link text-black">Research</a>
  <a href="/about/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">About</a>
  <button onclick="window.location.href='/contact/'" class="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-[#00FF94] text-black font-bold hover:brightness-110 transition-all text-center">WATCH THE SYSTEM LIVE — BOOK 15 MINUTES →</button>
</div>
`;
