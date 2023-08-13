import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  manifest: {
    short_name: "P2S",
    name: "Pay To Stay App",
    icons: [
      {
        src: "https://app.pay2stay.com/assets/icon/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
    ],
    start_url: ".",
    display: "browser",
    theme_color: "#ffffff",
    background_color: "#ffffff"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  base: "/vite-deploy/"
})