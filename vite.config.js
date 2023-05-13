import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

//import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOption: { enabled: true },
      manifest: {
        name: "SoundScape",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"], //search files with a pattern
      },
    }),
    // visualizer({
    //     open: true, // force html generated to be open in browser
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "firebase/app": "firebase/app",
      "firebase/auth": "firebase/auth",
      "firebase/firestore": "firebase/firestore",
      "firebase/storage": "firebase/storage",
    },
  },
});
