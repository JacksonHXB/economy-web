import VueRouter from 'vue-router'

import frontdeskCom from './components/frontdeskCom.vue'
import lodop from './components/lodop.vue'                              //lodop条码生成器
import doubleLodop from './components/doubleLodop.vue'                  //lodop双条生成器
import jsbarcode from './components/jsbarcode.vue'                      //frontdeskCom使用jsbarcode条码生成器
import vueprintnb from './components/vueprintnb.vue'                    //使用vueprintnb
import vueEasyPrint from './components/vueEasyPrint.vue'                //使用vueEasyPrint
import backstageCom from './components/backstageCom.vue'
import KnowledgeList from './components/backstage/knowledge/KnowledgeList.vue'
import login from './components/frontdesk/index/login.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/barcode' },
        { path: '/barcode', component: doubleLodop },
        { path: '/index', component: frontdeskCom, children:[
            { path: 'login', component: login }
        ]},
        { path: '/backstage', component:  backstageCom, children: [
            { path: 'knowledge', component: KnowledgeList },
        ]}
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router






































