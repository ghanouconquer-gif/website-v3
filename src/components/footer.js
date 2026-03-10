export const footerHTML = `
<footer class="bg-brand-black text-white font-sans border-t border-brand-border" data-purpose="footer">
  <!-- AI Engines Banner -->
  <div class="border-b border-brand-border/50 bg-[#080808]">
    <div class="max-w-screen-xl mx-auto px-6 py-12 flex flex-col items-center">
      <p class="font-mono text-[10px] text-brand-gray uppercase tracking-widest mb-8 text-center">Your Business Should Appear On</p>
        <div class="flex flex-wrap justify-center items-center gap-10 md:gap-14 opacity-50 grayscale contrast-125 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        
        <!-- ChatGPT -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-[10px] bg-[#10A37F]/10 flex items-center justify-center">
            <svg class="h-6 w-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.28 9.68a8.38 8.38 0 0 0-1.28-7.53A8.32 8.32 0 0 0 14.15 0a8.39 8.39 0 0 0-6.19 1.76A8.38 8.38 0 0 0 .54 8.7a8.32 8.32 0 0 0-1.63 7.6 8.39 8.39 0 0 0 6.13 6.01 8.38 8.38 0 0 0 7.82-1.93 8.32 8.32 0 0 0 7.3 2.15 8.39 8.39 0 0 0 5.09-8.45 8.38 8.38 0 0 0-2.97-4.4zM3.46 10.97v-1.12c0-3.3 1.9-5.32 5.09-5.32 1.3 0 2.53.48 3.48 1.34l-1.07 1.25a3.68 3.68 0 0 0-2.41-.93c-1.92 0-3.23 1.35-3.23 3.44v1.34zm6.09 7.37a4.92 4.92 0 0 1-3.62-1.57l1.1-1.22a3.46 3.46 0 0 0 2.52 1.09c1.94 0 3.25-1.35 3.25-3.46v-2.12h1.8v2.12c0 3.32-1.91 5.34-5.05 5.34zm3.62-6.6a4.57 4.57 0 0 1-1.36 3.3l-1.13-1.13a3.03 3.03 0 0 0 .76-2.17c0-2-1.36-3.37-3.26-3.37a3.49 3.49 0 0 0-2.5 1.05l-1.12-1.12a5.04 5.04 0 0 1 3.62-1.55c3.13 0 5.05 1.99 5.05 5.09v-.1zM14.6 11zm1.2-4.14a4.9 4.9 0 0 1 3.48-1.42c3.12 0 4.98 2.02 4.98 5.25v1.22h-1.8v-1.22c0-2.07-1.3-3.41-3.18-3.41a3.52 3.52 0 0 0-2.4.95zm.74 3.73v1.89c0 3.28-1.86 5.3-4.99 5.3a4.94 4.94 0 0 1-3.51-1.46l1.1-1.18a3.3 3.3 0 0 0 2.41 1c1.86 0 3.19-1.34 3.19-3.46v-1.81zM11.96 11l-2.06 2.06h4.12zm9.14 0v2.7h-1.8v-2.7c0-2-1.36-3.38-3.26-3.38a3.5 3.5 0 0 0-2.52 1.08l-1.13-1.11a5.06 5.06 0 0 1 3.65-1.59c3.15 0 5.06 1.98 5.06 5zm-3.83-3.08l-2.06 2.06h4.12z"/>
            </svg>
          </div>
        </div>

        <!-- Perplexity -->
        <div class="flex items-center gap-2">
          <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square">
            <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/>
            <rect x="9" y="9" width="6" height="6" fill="currentColor" stroke="none" />
          </svg>
          <span class="font-medium text-2xl tracking-tight" style="font-family: 'Inter', ui-sans-serif, system-ui; letter-spacing: -0.04em;">Perplexity</span>
        </div>

        <!-- Gemini -->
        <div class="flex items-center gap-1.5">
          <span class="font-medium text-[26px] tracking-tight" style="font-family: 'Google Sans', 'Inter', ui-sans-serif, system-ui; letter-spacing: -0.04em; background: linear-gradient(90deg, #fff 0%, #eee 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Gemini</span>
          <svg class="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"/>
          </svg>
        </div>

        <!-- Claude -->
        <div class="flex items-center gap-2">
          <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h6v2zm2-4H8v-2h8v2zm0-4H8V7h8v2z"/></svg>
          <span class="text-[25px]" style="font-family: 'Times New Roman', Times, serif; font-weight: 500; letter-spacing: -0.01em;">Claude</span>
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
