<template>
    <div ref="mymain">
        <h1>这是一个组件</h1>
    </div>
</template>


<script>
export default {
    data(){
        return {
            apiData: [
                {id:1, width:100, height:200, locationX:60, locationY: 70, content:"内容1"},
                {id:2, width:200, height:12, locationX:35, locationY: 100, content:"内容2"},
                {id:3, width:100, height:25, locationX:200, locationY: 346, content:"内容3"},
                {id:4, width:100, height:26, locationX:400, locationY: 247, content:"内容4"},
            ]
        }
    },
    created(){
        console.log('测试')
        // this.generateHtml()
    },
    mounted() {
        this.generateHtml()
    },
    methods: {
        /*生成HTML代码*/
        generateHtml() {
            let data = this.apiData
            let mymain = this.$refs.mymain
            console.log(mymain)
            for(let i in data){
                console.log(data[i])
                let div = document.createElement("div")
                div.innerText = data[i].content
                div.style.position = "absolute"
                div.style.width = data[i].width + "px"
                div.style.height = data[i].height + "px"
                div.style.top = data[i].locationY + "px"
                div.style.left = data[i].locationX + "px"
                div.style.border = "1px solid black"
                mymain.appendChild(div);  
            }
        }
    }
}
</script>


<style lang="css" scoped>

</style>







