<template>
    <div>
        <h1>这是vue-print-nb组件</h1>
        <div id="printTest" >
　　　　　　<p>锄禾日当午</p>
　　　　　　<p>汗滴禾下土 </p>
　　　　　　<p>谁知盘中餐</p>
　　　　　　<p>粒粒皆辛苦</p>
　　　　</div>
　　　　<button v-print="'#printTest'">打印</button>
    </div>
</template>


<script>
export default {

}
</script>


<style lang="css" scoped>

</style>







