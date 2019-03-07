<template>
    <div>
        <button @click="printPdf">打印</button>
        <div ref="my_context"></div> <!-- 将生成的HTML代码写入该容器 -->
        <object id="LODOP1" ref="LODOP1" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=200 height=300>
            <param name="Caption" value="显示区">
            <param name="Border" value="0">
            <param name="Color" value="white">
            <embed id="LODOP_EM1" ref="LODOP_EM1" TYPE="application/x-print-lodop" width=800 height=400 border=0
                Color="white" PLUGINSPAGE="install_lodop.exe">
        </object>
    </div>
</template>

<script>

    import { getLodop } from '../../lib/LodopFuncs.js'

    export default {
        data() {
            return {
                apiData: [
                    { id: 1, width: 10, height: 10, locationX: 5.2, locationY: 2, content: "" },
                    { id: 2, width: 20, height: 12, locationX: 35, locationY: 10, content: "内容2" },
                    { id: 3, width: 12, height: 13, locationX: 200, locationY: 3, content: "内容3" },
                    { id: 4, width: 16, height: 6, locationX: 400, locationY: 12, content: "内容4" },
                ]
            }
        },
        mounted() {
            console.log("已经进入该页面")
            //假定1mm === 1px


            this.generateHtml()
        },
        methods: {
            printPdf() {
                console.log("点击打印")
                let LODOP = getLodop(this.$refs.LODOP1, this.$refs.LODOP_EM1);
                LODOP.SET_PRINT_PAGESIZE(1, '40mm', '30mm', '');
                // LODOP.SET_PRINT_PAGESIZE(1, '82mm', '20mm', '');
                this.createPage()
                LODOP.PREVIEW();
            },
            createPage() {
                LODOP.ADD_PRINT_HTM("2mm", "6mm", "48mm", "34mm", this.$refs.my_context.innerHTML);
                // LODOP.ADD_PRINT_BARCODE(60, "6mm", 120, 40, "128Auto", "803040202dz")
            },
            /*生成HTML代码*/
            generateHtml() {
                let data = this.apiData
                let my_context = this.$refs.my_context
                console.log(my_context)
                for (let i in data) {
                    console.log(data[i])
                    let div = document.createElement("div")
                    div.innerText = data[i].content
                    div.style.position = "absolute"
                    div.style.width = data[i].width + "px"
                    div.style.height = data[i].height + "px"
                    div.style.top = (parseInt(data[i].locationY) - this.mmConversionPx(7)) + "px"
                    div.style.left = (parseInt(data[i].locationX) - this.mmConversionPx(7)) + "px"
                    div.style.border = "1px solid black"
                    if(i == 0)div.style.background = "black"
                    my_context.appendChild(div);
                }
            },
            /**
            * 获取DPI
            * @returns {Array}
            */
            conversion_getDPI() {
                var arrDPI = new Array;
                if (window.screen.deviceXDPI) {
                    arrDPI[0] = window.screen.deviceXDPI;
                    arrDPI[1] = window.screen.deviceYDPI;
                } else {
                    var tmpNode = document.createElement("DIV");
                    tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
                    document.body.appendChild(tmpNode);
                    arrDPI[0] = parseInt(tmpNode.offsetWidth);
                    arrDPI[1] = parseInt(tmpNode.offsetHeight);
                    tmpNode.parentNode.removeChild(tmpNode);
                }
                return arrDPI;
            },
            /**
             * px转换为mm
             * @param value
             * @returns {number}
             */
            pxConversionMm(value) {
                var inch = value / this.conversion_getDPI()[0];
                var c_value = inch * 25.4;
                //      console.log(c_value);
                return c_value;
            },
            /**
             * mm转换为px
             * @param value
             * @returns {number}
             */
            mmConversionPx(value) {
                var inch = value / 25.4;
                var c_value = inch * this.conversion_getDPI()[0];
                //      console.log(c_value);
                return c_value;
            }

        },
    }
</script>