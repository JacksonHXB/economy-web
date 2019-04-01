<template>
    <div class="body">
        <Layout>
            <Sider hide-trigger :width="300">
                <Card :bordered="true" :padding="0">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>代码</th>
                                <th>名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dict in dictList" :key="dict.id" @click="clickDict(dict)">
                                <td>{{dict.code}}</td>
                                <td>{{dict.name}}</td>
                                <td>
                                    <span class="iconfont icon-xiugai" @click="updateKnowledge(knowledge)" style="margin-right:8px;"></span>
                                    <span class="iconfont icon-shanchu" @click="delItem(knowledge.id)"></span>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
                </Card>
            </Sider>
            <Content>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>数值</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dictItem in dictItemList" :key="dictItem.id">
                            <td>{{dictItem.name}}</td>
                            <td>{{dictItem.value}}</td>
                            <td>{{dictItem.update_time}}</td>
                            <td>
                                <Button size="small" type="primary" @click="updateKnowledge(knowledge)">修改</Button>
                                <Button size="small" type="warning" @click="delItem(knowledge.id)">删除</Button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </Content>
        </Layout>

        
    </div>
</template>


<script>
import * as Dictionary from '../../../api/dictionary.js'

export default {
    data(){
        return {
            dictList: [],           //字典列表
            dictItemList: [
                {id: 1, name:"男", value:"sex01", update_time:"2017-12-03"},
                {id: 2, name:"女", value:"sex02", update_time:"2017-05-05"},
                {id: 3, name:"中性", value:"sex03", update_time:"2017-12-23"},
            ]
        }
    },
    created() {
        this.init_data()
    },
    methods:{
        /*初始化数据*/
        init_data(){
            Dictionary.default.getDictWithItems().then(res => {
                this.dictList = res
            })
        },
        /*点击字典类型*/
        clickDict(dict){
            this.dictItemList = dict.dictItems
        }
    }
}
</script>


<style lang="css">
.body{
    width:100%;
}
</style>