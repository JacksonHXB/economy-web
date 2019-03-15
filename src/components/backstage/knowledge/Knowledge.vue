<template>
    <div class="body">
        <Row>
            <Col span="10">
                <Input search enter-button placeholder="模糊查询" @on-search="search" v-model="keyword" />
                <button type="button" class="btn btn-primary" @click="isForm=true">增加</button>
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
                            <td>{{knowledge.keyword}}</td>
                            <td>{{knowledge.time}}</td>
                            <td>{{knowledge.websites}}</td>
                            <td>
                                <Button size="small" type="primary" @click="updateItem(knowledge)">修改</Button>
                                <Button size="small" type="warning" @click="delItem(knowledge.id)">删除</Button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </Col>
        </Row>
        <Row type="flex" justify="end">
            <Col>
                <Page :total="100" show-elevator />
            </Col>
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
        <KnowledgeForm :isForm="isForm" :knowledge="knowledge" @submit="submit" @close="closeForm"></KnowledgeForm>
    </div>
</template>


<script>
    import KnowledgeForm from './KnowledgeForm'
    export default {
        components: {
            KnowledgeForm
        },
        mounted() {
            this.getKnowList()
        },
        data() {
            return {
                keyword: "",        //关键字
                knowledgeList: [
                    { id: 1, title: "黄金", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 2, title: "原油", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 3, title: "黄金", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 4, title: "黄金", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 5, title: "黄金", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 6, title: "黄金", content: "这是黄金内容", keywords: "黄金", time: "2019-10-12 14:22", websites: "无" },
                ],
                modal2: false,
                modal_loading: false,
                isForm: false,          //显示弹出表单
                knowledge: {
                    id: null,
                    title: null,
                    content: null,
                    keywords: null,
                    time: null,
                    websites: null
                }
               
            }
        },
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            /*点击表单后的新建知识*/
            submit(data){
                console.log(data)
            },
            closeForm(flag){
                if(!flag)this.isForm = false
            },
            //获取知识库列表
            getKnowList() {
                //使用axios获取知识列表
                this.$axios.get('/api/knowledge/search/0', {params: {size:3}}).then(res => {
                    this.knowledgeList = res.data.data
                })
            },
            //修改知识
            updateItem(knowledge){
                console.log(knowledge)
                this.formValidate = knowledge
                this.modal1 = true      //显示修改面板框
            },
            delItem(knowledgeId){
                this.modal2 = true          //显示删除面板
                this.test = "测试"          //嵌入删除的提示语
                this.test2 = knowledgeId
            },
            //搜索知识
            search() {
                let that = this
                // let keyword = this.keyword   //获取用户输入的模糊查询字段
                // const msg = this.$Message.loading({
                //     content: 'Loading...',
                //     duration: 0
                // });
                // setTimeout(msg, 3000);
                let data = {params: {size: 3, keyword: this.keyword }}
                this.$axios.get('/api/knowledge/search/0',data).then(res => {
                    let result = res.data.data
                    if(result.length != 0){
                        that.knowledgeList = []
                        that.knowledgeList = result
                    }else{
                        that.$Notice.warning({ title: '没有查询到结果！' });
                    }
                })
            },
            //增加知识
            addKnowledge() {

            },
            ok() {
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$Message.info('Clicked cancel');
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            /*点击删除按钮*/
            del (id) {   
                console.log(id)   
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功！');
                }, 2000);
            }
        },
    }
</script>


<style lang="css" scoped>
.body{
    width:100%;
}
</style>