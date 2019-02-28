<template>
    <div>
        <Layout>
			<Header>
                <headerCom></headerCom>
            </Header>
			<Layout>
				<Sider hide-trigger>
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
    </div>
</template>


<script>
import HeaderCom from './frontdesk/index/HeaderCom.vue'

export default {
    components:{
        HeaderCom
    }
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







