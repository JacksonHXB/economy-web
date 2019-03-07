
import VueRouter from 'vue-router'

import frontdeskCom from '@/components/frontdeskCom'
//import lodop from '@/components/company/lodop'                              //lodop条码生成器
//import doubleLodop from '@/components/company/doubleLodop'                  //lodop双条生成器
//import jsbarcode from '@/components/company/jsbarcode'                      //frontdeskCom使用jsbarcode条码生成器
//import vueprintnb from '@/components/company/vueprintnb'                    //使用vueprintnb
//import vueEasyPrint from '@/components/company/vueEasyPrint'                //使用vueEasyPrint
//import generateHtml from '@/components/company/generateHtml'                //生成HTML代码
//import customerPrint from '@/components/company/customerPrint'              //测试自定义样式生成代码
import backstageCom from '@/components/backstageCom'
import KnowledgeList from '@/components/backstage/knowledge/KnowledgeList'
import login from '@/components/frontdesk/index/login'



var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: frontdeskCom, children:[
            { path: 'login', component: login }
        ]},
        { path: '/backstage', component:  backstageCom, children: [
            { path: 'knowledge', component: KnowledgeList },
        ]},
    ],
    linkActiveClass: '' //默认覆盖路由高亮的类router-link-active
})

export default router