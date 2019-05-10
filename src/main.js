// 导入顶级vue
import Vue from 'vue';
// 导入app.vue
import App from './App.vue';
Vue.config.productionTip = false;
// 导入ruoter.js
import router from './router.js';
// 公共全局样式
import './assets/less/publicWallet.less';
// 导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 钱包管理公共布局
import asideHeader from './components/asideHeader.vue';
Vue.component('aside-header',asideHeader)
import bread from './components/bread.vue';
Vue.component('my-bread',bread)
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})