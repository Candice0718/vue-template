import Vue from "vue";
import VueRouter from "vue-router";
import pages from "./pages/index";

// 路由配置
const routes = [
    {
        path: "/",
        component: pages.layout,
        children: [
            {
                path: "/",
                component: pages.home,
                name: "home",
                meta: {
                    title: "首页",
                }
            },
            {
                path: "/report",
                component: pages.report,
                name: "report",
                meta: {
                    title: "报表",
                }
            },
        ]
    }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
export default router;
