// 入口JS
import Vue from 'vue'
import App from './App'

import router from './router'

new Vue({
  el:'#app',
 // 注册组件
 components:{
    App
 },
  template:'<App/>',
  router
})
