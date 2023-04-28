import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main-copy.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/includes/firebase";

import VeeValidatePlugin from "./includes/validation";

let app;
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);

        app.mount("#app");
    }

});