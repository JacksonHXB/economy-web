<template>
    <div class="body">
        <Layout>
            <Sider hide-trigger>
                <Card :bordered="true">
                    <p slot="title">No border title</p>
                    <p>字典类型内容</p>
                </Card>
            </Sider>
            <Content>字典详情</Content>
        </Layout>

        
    </div>
</template>


<script>

export default {

}
</script>


<style lang="css">
.body{
    width:100%;
}
</style>