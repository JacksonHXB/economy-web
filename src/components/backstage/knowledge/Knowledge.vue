<template>
    <div class="body">
        <Row>
            <Col span="10">
                <Input search enter-button placeholder="模糊查询" @on-search="searchKnowledge" v-model="keywords" />
                <button type="button" class="btn btn-primary" @click="addKnowledge">增加</button>
            </Col>
        </Row>
        <Row type="flex" align="middle">
            <Col span="23">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>内容</th>
                            <th>关键字</th>
                            <th>时间</th>
                            <th>网址</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="knowledge in knowledgeList" :key="knowledge.id">
                            <td>{{knowledge.title}}</td>
                            <td>{{knowledge.content}}</td>
                            <td>{{knowledge.keywords}}</td>
                            <td>{{knowledge.time}}</td>
                            <td>{{knowledge.websites}}</td>
                            <td>
                                <Button size="small" type="primary" @click="updateKnowledge(knowledge)">修改</Button>
                                <Button size="small" type="warning" @click="delItem(knowledge.id)">删除</Button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </Col>
        </Row>
        <Row type="flex" justify="end">
            <Page :total="sum" show-elevator @on-change="clickPage" :page-size="pageSize"/>
        </Row>
    
        
        <Modal v-model="modal2" width="360" draggable>
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除提示语</span>
            </p>
            <div style="text-align:center">
                <p>这条信息{{test}}将会从知识库中删除</p>
                <p>确认删除它吗？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del(test2)">删除</Button>
            </div>
        </Modal>
    
            
        <!-- 知识库表单 -->
        <KnowledgeForm :isForm="isForm" :data="formData" @submit="submit" @close="closeForm"></KnowledgeForm>
    </div>
</template>


<script>
import KnowledgeForm from './KnowledgeForm'
import Qs from 'qs'
import * as Knowledge from '../../../api/knowledge.js'

// let host = "http://localhost/consumer"

export default {
    components: {
        KnowledgeForm
    },
    mounted() {

        let data = {page:0, size:0}
        Knowledge.default.getKnowledgeList(data).then(res => {
            this.sum = res.count    //设置总页数
            return "ok"
        }).then(res => {
            let data = {page:0, size:this.pageSize}
            Knowledge.default.getKnowledgeList(data).then(res => {
                this.knowledgeList = res.data   //设置初始化列表
            })
        })
    },
    data() {
        return {
            keywords: "",        //关键字
            knowledgeList: [],      //知识库列表
            modal2: false,
            modal_loading: false,
            isForm: false,          //显示弹出表单
            formData: {},               //传递给表单的数据
            test: "测试打印",
            sum: '0',                //数据的总数，默认每页显示10条数据
            pageSize: 3,             //当前显示结果条数
            
        }
    },
    methods: {
        /*点击表单的确定按钮，增加或修改知识*/
        submit(data){
            Knowledge.default.addKnowledge(data).then(res => {
                console.log(res)
            })
        },
        /*点击页码*/
        clickPage(page){
            let data = {page:page-1, size:this.pageSize}
            Knowledge.default.getKnowledgeList(data).then(res => {
                this.knowledgeList = res.data   //设置分页后的列表
            })
        },
        /*关闭表单*/
        closeForm(flag){
            if(!flag)this.isForm = false
        },
        //获取知识库列表
        getKnowList(page) {
            //使用axios获取知识列表
            return this.$axios.get(`${host}/knowledge/search/${page}`, {
                headers: { 'Content-Type': 'application/json' },
                params: {size:3}
            })

        },
        //修改知识
        updateKnowledge(knowledge){
            this.isForm = true
            this.formData = {
                flag: 'update',
                knowledge: knowledge
            }
        },
        //增加知识
        addKnowledge(){
            this.isForm=true
            this.formData = {flag: 'add', knowledge: {}}
        },
        delItem(knowledgeId){
            this.modal2 = true          //显示删除面板
            this.test = "测试"          //嵌入删除的提示语
            this.test2 = knowledgeId
        },
        //搜索知识
        searchKnowledge() {
            let that = this
            let data = {page:0, size:this.pageSize, keywords: this.keywords}
            Knowledge.default.getKnowledgeList(data).then(res => {
                this.knowledgeList = []
                this.sum = res.count
                this.knowledgeList = res.data   //设置初始化列表
            })
        },
        /*点击删除按钮*/
        del (id) {   
            let that = this
            this.modal_loading = true;
            setTimeout(() => {
                this.modal_loading = false;
                this.modal2 = false;
                Knowledge.default.delKnowledge(id).then(res => {
                    console.log(res)
                })
            }, 1000);
        }
    },
}
</script>


<style lang="css" scoped>
.body{
    width:100%;
}
</style>