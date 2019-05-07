
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页模块组件
import index from './components/index.vue'
// 登录页组件
import login from './components/login.vue'
import wallet from './components/wallet/wallet.vue'
// 钱包数据组件
import number from './components/wallet/number.vue'
// 收入支出组件
import income from './components/wallet/income.vue'



const routes = [
  {path:'/', component: index},
  {path: '/login', component: login },
  {path: '/wallet', component: wallet,
  children:[
    {path:'/number',component:number},
    {path:'/income',component:income},
  ]
 },
  
]


const router = new Router({
  routes
})

export default router