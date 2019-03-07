// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'

//导入Vue路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


//导入iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

//引入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
