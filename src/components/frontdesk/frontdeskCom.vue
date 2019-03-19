<template>
    <div>
        <Layout>
			<Header>
                <headerCom></headerCom>
            </Header>
			<Layout>
				<Sider width="80">
                    <h1>侧边栏</h1>
                </Sider>
				<Content>
                    <h1>内容</h1>
                </Content>
			</Layout>
			<Footer>
                <h1>底部</h1>
            </Footer>
		</Layout>

        <!-- 新闻弹出面板 -->
        <News :isNews="isNews"></News>

    </div>
</template>


<script>
import HeaderCom from './index/HeaderCom.vue'
import News from './index/News.vue'

export default {
    components:{
        HeaderCom,
        News
    },
    data(){
        return {
            isNews: false,          //默认不显示早上新闻
        }
    },
    mounted(){
        //5s后显示新闻提示
        setTimeout(() =>{  
            this.isNews = true
        }, 5000)
    },
}
</script>


<style lang="css" scoped>
.ivu-layout-header {
    width: 100%;
    height: 50px;
    background:white;
    padding: 0px;
    line-height: 50px;
}

.ivu-layout-sider-children {
    width: 30px;
    height: 500px;
    background: rgb(205, 228, 243);
}

.ivu-layout-content {
    width: 90%;
    height: 500px;
    background: rgb(205, 233, 220);
}

.ivu-layout-footer {
    width: 100%;
    height: 20px;
    background: rgb(243, 215, 215);
}
</style>







