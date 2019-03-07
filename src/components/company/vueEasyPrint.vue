<template>
    <div>
        <h1>这是vue-easy-print组件</h1>
        <button @click="printDemo">测试打印</button>
        <vue-easy-print tableShow ref="easyPrint" >
            测试
            <!-- 你自己编写打印的模板 -->
            <!-- <template slot-scope="func">
                <demo :getChineseNumber="func.getChineseNumber" ></demo>
            </template> -->
        </vue-easy-print>
    </div>
</template>


<script>
export default {
    data(){
        return {
            tableData: {
                id: 998,
                store_name: "测试店铺",
                created_at: "2018-06-06 15:21:35",
        
                detail: [
                    {
                        name: "商品A",
                        item_unit: "40ML",
                        item_size: "瓶",
                        item_quantity: 5,
                        item_price: 188,
                        pv: 150,
                        item_total: 5 * 188,
                        item_total_pv: 5 * 150
                    },
                    {
                        name: "商品A",
                        item_unit: "40ML",
                        item_size: "瓶",
                        item_quantity: 5,
                        item_price: 188,
                        pv: 150,
                        item_total: 5 * 188,
                        item_total_pv: 5 * 150
                    },
                ]
            }
        }
    },
    methods:{
        printDemo(){
            this.$refs.easyPrint.print()    
            console.log(this.$refs.easyPrint)
        }
    }
}   
</script>


<style lang="css" scoped>

</style>







