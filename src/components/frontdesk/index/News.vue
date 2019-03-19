<!-- 资讯提示面板 -->
<template>
    <div>
        <Modal v-model="isNews" title="热点新闻" width="300" draggable footer-hide>
            <p>这是一条新闻</p>
            <p>这是一条新闻</p>
            <p>这是一条新闻</p>
            <p>这是一条新闻</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        props: ["isNews"],
        data () {
            return {
                
            }
        },
        
    }
</script>
<style scoped>

</style>








