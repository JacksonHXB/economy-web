<template>
    <div>
        <Row>
            <Col span="8">logo</Col>
            <Col span="16">
                <Row type="flex" justify="end">
                    <Col class-name="test">
                        <router-link to="/backstage">
                            <Button type="primary">后台管理</Button>
                        </router-link>
                        <a href="#">登陆</a>
                        <Divider type="vertical"/>
                        <a href="#">注册</a>
                    </Col>
                </Row>
            </Col>
        </Row>
        <br>
    </div>
</template>


<script>
export default {
    methods:{
    }
}
</script>


<style lang="css" scoped>
.test{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>







