export const headerHTML = `
<nav class="sticky top-0 z-50 bg-[#080808] px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-sm">
<div class="flex items-center">
<a href="/" class="flex items-center">
  <img src="/unbacked-logo.png?v=2" alt="UNBACKED Logo" class="h-10 md:h-12 w-auto object-contain" />
</a>
</div>
<div class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a href="/what-we-do/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 nav-link">
  Services <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
</a>
<a href="/geo-for-home-services/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  Methodology
</a>
<a href="/case-studies/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 nav-link">
  Results <span class="bg-brand-blue text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider rounded-sm">New</span>
</a>
<a href="#pricing" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  Pricing
</a>
<a href="/blog/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors nav-link">
  Blog
</a>
<a href="/ai-visibility-audit/" class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 nav-link">
  Tools <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
</a>
</div>
<div class="flex items-center">
<button class="bg-brand-blue text-white font-mono text-[10px] md:text-xs px-5 py-2.5 uppercase tracking-widest border border-transparent hover:brightness-110 transition-colors shadow-sm" onclick="window.location.href='/contact/'">
  SPEAK WITH TEAM
</button>
<button class="ml-4 p-1 md:hidden" id="mobile-menu-btn" aria-label="Toggle menu">
<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8h16M4 16h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</div>
</nav>
<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 bg-white z-40 hidden flex-col items-center justify-center pt-16">
  <button id="close-menu-btn" class="absolute top-4 right-4 p-2">
    <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
  <a href="/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Home</a>
  <a href="/what-we-do/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Services</a>
  <a href="/geo-for-home-services/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Methodology</a>
  <a href="/case-studies/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Results</a>
  <a href="/blog/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Blog</a>
  <a href="/ai-visibility-audit/" class="text-2xl font-bold mb-6 hover:text-gray-500 nav-link text-black">Tools</a>
  <!-- Speak with team button removed -->
</div>
`;
