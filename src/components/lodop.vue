<template>
    <div class="demo">
        <form id="form1" ref="form1" hidden>
            <TABLE border=0 cellSpacing=0 cellPadding=1 width="100%" style="border-collapse:collapse;font-size:11px" bordercolor="#333333">     
                <TBODY>      
                    <TR>
                        <TD width="50%">
                            <DIV align=left>
                                <b>款号：</b><span>P01361</span>
                            </DIV>
                        </TD>
                        <TD width="50%">
                            <DIV align=left>
                                <b>￥450</b>
                            </DIV>
                        </TD>
                    </TR>
                    <TR>
                        <TD width="100%" colspan="2">
                            <DIV align=left>
                                <b>名称：</b><span>长袖三叶草</span>
                            </DIV>
                        </TD>
                    </TR>
                    <TR>
                        <TD width="50%">
                            <DIV align=left>
                                <b>颜色：</b><span>白色</span>
                            </DIV>
                        </TD>
                        <TD width="50%">
                            <DIV align=left>
                                <b>尺码：</b><span>S</span>
                            </DIV>
                        </TD>
                    </TR>
                </TBODY>
            </TABLE>
            <object id="LODOP1" ref="LODOP1" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=200 height=300>
                <param name="Caption" value="显示区">
                <param name="Border" value="0">
                <param name="Color" value="white">
                <embed id="LODOP_EM1" ref="LODOP_EM1" TYPE="application/x-print-lodop" width=800 height=400 border=0
                    Color="white" PLUGINSPAGE="install_lodop.exe">
            </object>
        </form>
        <el-button @click="printPdf">打印</el-button>
    </div>
</template>

<script>

import { getLodop } from '../lib/LodopFuncs.js'

export default {
    name: "demo",
    data() {
        return {}
    },
    methods: {
        printPdf() {
            alert("ceshi")
            console.log(this.$refs.LODOP1, this.$refs.LODOP_EM1)
            let LODOP = getLodop(this.$refs.LODOP1, this.$refs.LODOP_EM1);
            LODOP.SET_PRINT_PAGESIZE(1, '48mm', '38mm', '');
            
            this.createAllPages()
            LODOP.PREVIEW();
        },
        createAllPages() {
            for (let i = 0; i < 4; i++) {
                LODOP.NewPage();
                // LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);//设置以纸张边缘为基点
                LODOP.ADD_PRINT_HTM("2mm", "6mm", "48mm", "34mm", this.$refs.form1.innerHTML);
                let num1 = parseInt(parseInt(Math.random() * (99999 - 10000 + 1) + 10000, 10))
                LODOP.ADD_PRINT_BARCODE(60, "6mm", 120, 40, "128Auto", "803040202dz")
            }
        }
    }
}
</script>