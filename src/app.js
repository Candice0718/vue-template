import Vue from 'vue';
import App from './App.vue';
// 引入element配置
import "./elementConfig.js";
// 引入路由配置
import router from './router.js';
// 引入项目的全局样式
import './sass/base.scss';
// 引入全部的组件
require('./components/index.js');

Vue.config.productionTip = false;

// 添加全局的事件总线
Vue.prototype.$eventBus = new Vue();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
