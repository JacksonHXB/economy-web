import VueRouter from 'vue-router'

import frontdeskCom from './components/frontdeskCom.vue'
import backstageCom from './components/backstageCom.vue'
import KnowledgeList from './components/backstage/knowledge/KnowledgeList.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: frontdeskCom },
        { path: '/backstage', component:  backstageCom, children: [
            { path: 'knowledge', component: KnowledgeList },
        ]}
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router