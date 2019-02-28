<template>
    <div class="layout" :style="{height:screenHeight + 'px'}">
        <router-view></router-view>
	</div>
</template>


<script>

export default {
    data() {
        return {
            screenHeight: document.documentElement.clientHeight //屏幕高度
        }
    }
}
</script>


<style lang="css" scoped>
.layout {
    width: 100%;
}
</style>