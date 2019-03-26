import Http from '../utils/http.js'             //导入请求函数
import Vue from '../main.js'                    //导入全局的Vue实例，相当于this


export default {
    addKnowledge,
    getKnowledgeList,
    delKnowledge,
}

/*删除知识
*/
function delKnowledge(id){
    return new Promise((success, fail) => {
        Http.get(`/knowledge/del/${id}`).then(res => {
            Vue.$Message.success('知识删除成功！');
            success(res.result)
        }).catch(Error => {
            fail(Error)
        })
    })
}


/*增加知识
*/
function addKnowledge(data){
    return new Promise((success, fail) => {
        Http.post("/knowledge/addOrUpdate", data).then(res => {
            if(data.id){
                Vue.$Message.success('知识更新成功！');
            }else{
                Vue.$Message.success('知识添加成功！');
            }
            success(res.result)
        }).catch(Error => {
            fail(Error)
        })
    })
}


/*获取知识列表
*/
function getKnowledgeList(data){
    return new Promise((success, fail) => {
        Http.get(`/knowledge/search/${data.page}`, data).then(res => {
            success(res)
        }).catch(Error => {
            fail(Error)
        })
    })
    
}









































