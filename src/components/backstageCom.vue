<template>
<div>
    <Layout>
        <!-- 顶部栏 -->
        <Header>
            <router-link to="/index">返回前台</router-link>
        </Header>
        <Layout style="height:800px">
            <!-- 侧边栏 -->
            <!--- 这是-->
            <Sider collapsible collapsed-width="78" v-model="isCollapsed" style="overflow: hidden;" width="166px">
                <Menu active-name="1-2" mode="vertical" theme="dark" width="166px" :class="menuItemClasses" @on-select="clickMenuItem">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            这是一个测试
                        </template>
                        <MenuItem name="1-1">增加标签页</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            知识库管理
                        </template>
                        <MenuItem name="2-1">知识库CURD</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            系统设置
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4"></MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
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
                
                <Tabs type="card" closable @on-tab-remove="handleTabRemove">
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
import HeaderCom from './backstage/HeaderCom.vue'
import com1 from './backstage/com1.vue'
import com2 from './backstage/com2.vue'
import com3 from './backstage/com3.vue'
import knowledge from './backstage/knowledge/Knowledge.vue'


export default {
    components: {
        "HeaderCom":HeaderCom,
        "com1": com1,
        "com2": com2,
        "com3": com3,
        "knowledge": knowledge
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
        handleTabRemove (name) {
            this['tab' + name] = false;
        },
        /*增加标签*/
        handleTabsAdd () {
            this.tabs ++;
        },
        /*点击菜单选项*/
        clickMenuItem(index){
            if(index == "2-1"){  //新增知识库编辑页面
                this.tabs.splice(0, 0, {name:"知识库", value:"knowledge"})
            }
        }
    },
    
}
</script>


<style>
.ivu-menu-submenu-title{
    padding:5px ! important;
    margin:5px ! important;
}
</style>







