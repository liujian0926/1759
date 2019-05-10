
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 首页模块组件
import index from './Pages/index.vue';
// 登录页组件
import login from './Pages/login.vue';
import home from './Pages/wallet/home.vue';
// 钱包数据组件
import data from './Pages/wallet/data.vue';
// 收入支出组件
import income from './Pages/wallet/income.vue';
// 平台提现记录组件
import platformCash from './Pages/wallet/platform_cash.vue';
// 平台收益组件
import platformEarnings from './Pages/wallet/platform_earnings.vue';
// 项目usdt组件
import projectUsdt from './Pages/wallet/project_usdt.vue';
// 项目积分兑换组件
import projectExchange from './Pages/wallet/project_exchange.vue';
// 项目积分充值
import projectRecharge from './Pages/wallet/project_recharge.vue';
// B端usdt组件
import Busdt from './Pages/wallet/B_usdt.vue';
// B端积分兑换
import Bexchange from './Pages/wallet/B_exchange.vue';
// B端积分买卖组件
import Bdeal from './Pages/wallet/B_deal.vue';
// 平台usdt组件
import platformUsdt from './Pages/wallet/platform_usdt.vue';
// 运营模块
import runHome from './Pages/run/run_home.vue'



const routes = [
  {path:'/', component: index},
  {path: '/login', component: login },
  // 钱包模块
  {path: '/home', component: home,
  children:[
    {path:'/data',component:data},
    {path:'/income',component:income},
    {path:'/platform_cash',component:platformCash},
    {path:'/platform_earnings',component:platformEarnings},
    {path:'/project_usdt',component:projectUsdt},
    {path:'/project_exchange',component:projectExchange},
    {path:'/project_recharge',component:projectRecharge},
    {path:'/B_usdt',component:Busdt},
    {path:'/B_exchange',component:Bexchange},
    {path:'/B_deal',component:Bdeal},
    {path:'/platform_usdt',component:platformUsdt},

  ]
  },
  // 运营模块
  {path:'/run_home',component:runHome}
  

]


const router = new Router({
  routes
})

export default router