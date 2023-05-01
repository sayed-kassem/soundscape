import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
// const routes = [{
//     path: "/",

// }];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            component: About,
            name: "about",
        },
        {
            path: "/manage",
            component: Manage,
            name: "manage"
        }
    ],
    linkExactActiveClass: "text-yellow-500"
});

export default router;