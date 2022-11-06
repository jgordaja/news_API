import { createRouter, createWebHashHistory } from 'vue-router';
import EverythingPage from "@/components/Pages/EverythingPage";
import HomePage from "@/components/Pages/HomePage";
import Error404 from "@/components/Pages/Error404";
import TopPage from "@/components/Pages/TopPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/top',
        name: 'top',
        component: TopPage
    },
    {
        path: '/everything',
        name: 'everything',
        component: EverythingPage
    },
    {
        path:  '/:notFound(.*)',
        component: Error404
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'nav__link-activ',
    linkExactActiveClass: 'nav__link-activ'
})

export default router;
