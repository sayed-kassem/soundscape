import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePWA({
        registerType: "autoUpdate",
        devOption: { enabled: true }
    })],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src",
                import.meta.url)),
            "firebase/app": "firebase/app",
            "firebase/auth": "firebase/auth",
            "firebase/firestore": "firebase/firestore",
            "firebase/storage": "firebase/storage",
        },
    },
});