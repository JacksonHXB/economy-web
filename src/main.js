console.log("------- 项目已启动 -----------")

import Vue from 'vue'

//导入Vue路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入axios
import axios from 'axios'

//导入iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

//引入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'


import app from './App.vue'         //导入App根组件

//配置全局的域名
Vue.http.options.root = 'http://localhost:8000/'

Vue.prototype.$axios = axios

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})












