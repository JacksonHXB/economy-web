<template>
    <div>
        <svg id="barcode"></svg>
    </div>
</template>


<script>
var JsBarcode = require('jsbarcode')
export default {
    data(){
        return {
            sku: 'test'
        }
    },
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







