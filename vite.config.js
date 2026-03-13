import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        whatWeDo: resolve(__dirname, 'what-we-do/index.html'),
        caseStudies: resolve(__dirname, 'case-studies/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        geo: resolve(__dirname, 'geo-for-home-services/index.html'),
        voiceAgent: resolve(__dirname, 'ai-voice-agent/index.html'),
        audit: resolve(__dirname, 'ai-visibility-audit/index.html'),
        blogHub: resolve(__dirname, 'blog/index.html'),
        blogHvac: resolve(__dirname, 'blog/hvac-market-2026/index.html'),
        blogAgencies: resolve(__dirname, 'blog/best-hvac-marketing-agencies-2026/index.html'),
        blogAngiThumbtack: resolve(__dirname, 'blog/angi-vs-thumbtack-for-hvac-2026/index.html'),
        blogNoMoneyHvac: resolve(__dirname, 'blog/how-to-start-hvac-business-no-money/index.html'),
        blogHvacSalary2026: resolve(__dirname, 'blog/hvac-business-owner-salary-2026/index.html'),
        researchTampa: resolve(__dirname, 'research/ai-visibility-tampa-hvac/index.html')
      }
    }
  }
})
