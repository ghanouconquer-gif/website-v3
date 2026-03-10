export const footerHTML = `
<footer class="bg-brand-black text-white font-sans border-t border-brand-border" data-purpose="footer">
  <!-- AI Engines Banner -->
  <div class="border-b border-brand-border/50 bg-[#080808]">
    <div class="max-w-screen-xl mx-auto px-6 py-12 flex flex-col items-center">
      <p class="font-mono text-[10px] text-brand-gray uppercase tracking-widest mb-8 text-center">Your Business Should Appear On</p>
        <div class="flex flex-wrap justify-center items-center gap-10 md:gap-14 opacity-50 grayscale contrast-125 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        
        <!-- ChatGPT -->
        <div class="flex items-center gap-2">
          <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg" alt="ChatGPT" class="h-6 w-auto" />
        </div>

        <!-- Perplexity -->
        <div class="flex items-center gap-2">
          <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/perplexity.svg" alt="Perplexity" class="h-6 w-auto" />
          <span class="font-bold text-lg tracking-tight font-sans">Perplexity</span>
        </div>

        <!-- Gemini -->
        <div class="flex items-center gap-2">
          <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg" alt="Gemini" class="h-6 w-auto" />
          <span class="font-bold text-lg tracking-tight font-sans">Gemini</span>
        </div>

        <!-- Claude -->
        <div class="flex items-center gap-2">
          <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/anthropic.svg" alt="Claude" class="h-6 w-auto" />
          <span class="font-bold text-lg tracking-tight font-sans">Claude</span>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto px-6 pt-12 pb-8">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 mb-12">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="inline-block">
          <img src="/unbacked-logo.png?v=2" alt="UNBACKED" class="h-8 md:h-10 w-auto opacity-100 hover:opacity-80 transition-opacity" />
        </a>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-4 font-mono text-xs uppercase tracking-widest text-brand-gray">
        <a href="/geo-for-home-services/" class="hover:text-white transition-colors">GEO Method</a>
        <a href="/ai-voice-agent/" class="hover:text-white transition-colors">AI Voice Agent</a>
        <a href="/research/ai-visibility-tampa-hvac/" class="hover:text-white transition-colors">Research</a>
        <a href="/case-studies/" class="hover:text-white transition-colors">Case Studies</a>
        <a href="/#live-demo" class="hover:text-white transition-colors flex items-center gap-1.5 line-clamp-1">Live Demo <div class="w-1.5 h-1.5 bg-[#00FF94] rounded-full animate-pulse shadow-[0_0_4px_rgba(0,255,148,0.8)]"></div></a>
        <a href="/ai-visibility-audit/" class="hover:text-white transition-colors">Free Audit</a>
        <a href="/blog/" class="hover:text-white transition-colors">Blog</a>
        <a href="/contact/" class="hover:text-white transition-colors">Contact</a>
        <a href="/privacy-policy/" class="hover:text-white transition-colors">Privacy</a>
        <a href="/terms-of-service/" class="hover:text-white transition-colors">Terms</a>
        <a href="https://www.linkedin.com/company/unbacked" target="_blank" rel="noopener" aria-label="LinkedIn" class="hover:text-[#00FF94] transition-colors flex items-center">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </nav>
    </div>

    <!-- Copyright -->
    <div class="text-center border-t border-brand-border pt-8">
      <p class="font-mono text-[9px] md:text-[10px] text-brand-gray uppercase tracking-widest">
        &copy; 2026 UNBACKED AGENCY. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<!-- Floating WhatsApp Button -->
<a href="https://wa.me/213799767241" target="_blank" rel="noopener noreferrer" 
   class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none group"
   aria-label="Contact us on WhatsApp">
  <svg class="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
</a>
`;
