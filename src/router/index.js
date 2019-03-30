// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  //去掉地址栏的#号
  mode:'history',
  routes
})
