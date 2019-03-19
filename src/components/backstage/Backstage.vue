<template>
<div>
    <Layout>
        <!-- 顶部栏 -->
        <Header>
            <Col> <router-link to="/index">返回前台</router-link></Col>
           
            
        </Header>
        <Layout style="height:800px">
            <!-- 侧边栏 -->
            <!--- 这是-->
            <Sider collapsible collapsed-width="78" v-model="isCollapsed" style="overflow: hidden;" width="166px">
                <Menu active-name="1-2" mode="vertical" theme="dark" width="166px" :class="menuItemClasses" @on-select="clickMenuItem">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            用户管理
                        </template>
                        <MenuItem name="1-1">用户CRUD</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            知识库管理
                        </template>
                        <MenuItem name="2-1">知识库CURD</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            系统设置
                        </template>
                        <MenuGroup title="常用设置">
                            <MenuItem name="3-1">数据字典</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Sider>
            <Content>
                <!-- 快捷路由 -->
                <Breadcrumb>
                    <BreadcrumbItem to="/">
                        <Icon type="ios-home-outline"></Icon> Home
                    </BreadcrumbItem>
                    <BreadcrumbItem to="/components/breadcrumb">
                        路径1
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        路径2
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        路径3
                    </BreadcrumbItem>
                </Breadcrumb>
                
                <Tabs type="card" closable @on-tab-remove="clickDelTab">
                    <template v-for="item in tabs">
                        <TabPane :label="item.name">
                            <component :is="item.value"></component>
                        </TabPane>
                    </template>
                </Tabs>
            </Content>
        </Layout>
    </Layout>
</div>        
</template>


<script>
import knowledge from './knowledge/Knowledge.vue'
import Dictionary from './dictionary/Dictionary.vue'
import User from './user/User.vue'

export default {
    components: {
        "Knowledge": knowledge,
        "Dictionary": Dictionary,
        "User": User
    },
    computed:{
        menuItemClasses(){
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu': ''
            ]
        }
    },
    data(){
        return {
            isCollapsed: false,
            tabs: []
        }
    },
    methods:{
        /*增加标签*/
        handleTabsAdd () {
            this.tabs ++;
        },
        /*点击删除标签页*/
        clickDelTab(index){
            this['tab' + index] = false;
            this.tabs.splice(index, 1)
        },
        /*点击菜单选项*/
        clickMenuItem(index){
            let clickItem = null
            switch(index){
                case "1-1":
                    clickItem= { id: '1-1', name: '用户CRUD', value: 'User' }
                    break
                case "2-1": //新增知识库编辑页面
                    clickItem = { id: '2-1', name: '知识库', value: 'Knowledge'}
                    break
                case "3-1":
                    clickItem = { id: '3-1', name: '数据字典', value: "Dictionary"}
                    break
            }
            //菜单选项不可重复添加到标签页列表中
            if(this.tabs.length == 0){
                this.tabs.splice(0, 0, clickItem)   
                return
            }else{
                let flag = this.tabs.some((tab) => {
                    return tab.id == index
                })
                if(!flag) this.tabs.splice(0, 0, clickItem)
            }
        }
    },
    
}
</script>


<style>
.ivu-menu-submenu-title{
    padding:5px ! important;
}
</style>







