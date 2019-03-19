
import VueRouter from 'vue-router'

import frontdeskCom from '@/components/frontdesk/frontdeskCom'
import Backstage from '@/components/backstage/Backstage'
import test from '@/components/test.vue'                                          //导入测试模块




var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/backstage' },
        { path: '/index', component: frontdeskCom},
        { path: '/backstage', component:  Backstage},
        { path: '/test', component: test}
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router