<template>
    <div>
        <h1>这是vue-print-nb组件</h1>
        <div id="printTest" width="200" height="300" style="background:red;">
            <svg id="barcode"></svg>
　　　　</div>
　　　　<button v-print="'#printTest'">打印</button>
    </div>
</template>


<script>
export default {
    mounted(){
        JsBarcode("#barcode", "21374658", {
            lineColor: 'black',
            height: 30,
            displayValue: true
        });
    },
}
</script>


<style lang="css" scoped>

</style>







