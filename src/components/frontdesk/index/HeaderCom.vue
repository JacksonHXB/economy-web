<template>
    <div>
        <Row>
            <Col span="8">
                <div class="imgWrapper">
                    <img src="../../../static/frontdesk/logo.png" />
                </div>
            </Col>
            <Col span="16">
                <Row type="flex" justify="end">
                    <Col class-name="test">
                        <router-link to="/backstage">
                            <Button type="primary">后台管理</Button>
                        </router-link>
                        <router-link to="/index/login">
                            <Button type="primary">登陆</Button>    
                        </router-link>
                        <Divider type="vertical"/>
                        <a href="#">注册</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>


<script>
export default {
    methods:{
    }
}
</script>


<style lang="css" scoped>
.imgWrapper{
    box-sizing: border-box;
    width:100%;
    height:100%;
    margin-left:10px;
}
.test{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>







