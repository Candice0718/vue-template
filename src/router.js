import Vue from "vue";
import VueRouter from "vue-router";
import pages from "./pages/index";

// 路由配置
const routes = [
    {
        path: "/",
        component: pages.page1
    },
    {
        path: "/page2",
        component: pages.page2
    }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
export default router;
