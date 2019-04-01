import Http from '../utils/http.js'             //导入请求函数
import Vue from '../main.js'                    //导入全局的Vue实例，相当于this


export default {
    getDictWithItems,                           //获取字典列表及字典详情
}

/*获取字典列表及字典详情
*/
function getDictWithItems(data){
    return new Promise((success, fail) => {
        Http.get(`/dict/dictItems`, data).then(res => {
            success(res.data)
        }).catch(Error => {
            fail(Error)
        })
    })
    
}









































