
import VueRouter from 'vue-router'

import frontdeskCom from '@/components/frontdeskCom'
import backstageCom from '@/components/backstageCom'
import KnowledgeList from '@/components/backstage/knowledge/KnowledgeList'
import login from '@/components/frontdesk/index/login'
import test from '@/components/test.vue'                                          //导入测试模块




var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/test' },
        { path: '/index', component: frontdeskCom, children:[
            { path: 'login', component: login }
        ]},
        { path: '/backstage', component:  backstageCom, children: [
            { path: 'knowledge', component: KnowledgeList },
        ]},
        { path: '/test', component: test}
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router