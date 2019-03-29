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
import 'bootstrap/dist/js/bootstrap.js'

//引入axios配置
//import axios from '../config/axios.js'
//window.axios = axios()
//Vue.prototype.$http = window.axios    //将axios作为Vue的原型属性


//导入HTTP
import http from "./utils/http.js"
Vue.prototype.$http = http

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
