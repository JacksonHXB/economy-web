<template>
    <div>
        <Col span="8">
            <Input search enter-button placeholder="模糊查询" @on-search="search" v-model="keyword"/>
        </Col>
        <Col span="24">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>标题</th>
                        <th>内容</th>
                        <th>关键字</th>
                        <th>时间</th>
                        <th>网址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="knowledge in knowledgeList" :key="knowledge.id">
                        <td>{{knowledge.title}}</td>
                        <td>{{knowledge.content}}</td>
                        <td>{{knowledge.keyword}}</td>
                        <td>{{knowledge.time}}</td>
                        <td>{{knowledge.websites}}</td>
                    </tr>
                </tbody>
            </table>
        </Col>
        
    </div>
</template>


<script>
export default {
    created(){
        this.getKnowList()
    },
    methods:{
        data(){
            return {
                keyword: "",        //关键字
                knowledgeList:　[], 
            }
        },
        getKnowList(){
            this.$http.get('knowledge/search/0').then(res => {
                this.knowledgeList = res.body.data
                console.log(res.body.data)
            })
        },
        search(){
            alert("测试")
        }
    }
}
// this.$http.get('/someUrl').then(response => {
 
//     // get body data
//     this.someData = response.body;
 
//   }, response => {
//     // error callback
//   });
</script>


<style lang="css" scoped>

</style>







