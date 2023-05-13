import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main-copy.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/includes/firebase";

import Icon from "./directives/icon";
import i18n from "./includes/i18n";
import { registerSW } from "virtual:pwa-register"
import VeeValidatePlugin from "./includes/validation";
import GlobalComponents from "@/includes/_globals.js";

import progressBar from "@/includes/progress-bar";
import "nprogress/nprogress.css";
registerSW({ immediate: true }); // register a service worker.

progressBar(router);

let app;
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(i18n);
        app.use(GlobalComponents);
        app.directive("icon", Icon);
        app.mount("#app");
    }

});