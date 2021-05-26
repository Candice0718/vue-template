/* eslint-disable */
/**
 * @desc 页面自动化注册
 * @important 此文件禁止手动修改！
 */
// 路由配置
const pages = {
    page1: () => import( /* webpackChunkName: "pages/page1" */ "./page1/page1.vue"),
    page2: () => import( /* webpackChunkName: "pages/page2" */ "./page2/page2.vue"),
};
export default pages;