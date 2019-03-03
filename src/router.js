import VueRouter from 'vue-router'

import frontdeskCom from './components/frontdeskCom.vue'
import lodop from './components/lodop.vue'          //lodop条码生成器
import jsbarcode from './components/jsbarcode.vue'      //使用jsbarcode条码生成器
import vueprintnb from './components/vueprintnb.vue'        //使用vueprintnb
import vueEasyPrint from './components/vueEasyPrint.vue'        //使用vueEasyPrint
import backstageCom from './components/backstageCom.vue'
import KnowledgeList from './components/backstage/knowledge/KnowledgeList.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: vueprintnb },
        { path: '/backstage', component:  backstageCom, children: [
            { path: 'knowledge', component: KnowledgeList },
        ]}
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router






































