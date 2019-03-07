<template>
        <div class="demo">
            <form id="form1" ref="form1">
                <TABLE border=0 cellSpacing=0 cellPadding=1 width="100%" style="border-collapse:collapse;font-size:11px" bordercolor="#333333">     
                    <TBODY>      
                        <TR>
                            <TD width="60%">
                                <DIV align=right>
                                    <b style="font-weight: bold">款号：</b><span style="font-weight: bold">PFEEF11</span>
                                </DIV>
                            </TD>
                            <TD width="40%">
                                <DIV align=left>
                                    <b style="font-weight: bold">￥450</b>
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
            <el-button @click="printDesign">打印设计</el-button>
        </div>
    </template>
    
    <script>
    
    import { getLodop } from '../../lib/LodopFuncs.js'
    
    export default {
        name: "demo",
        data() {
            return {
                word:""
            }
        },
        created(){
            this.generateWord()
        },
        methods: {
            printPdf() {
                console.log(this.$refs.LODOP1, this.$refs.LODOP_EM1)
                let LODOP = getLodop(this.$refs.LODOP1, this.$refs.LODOP_EM1);
                LODOP.SET_PRINT_PAGESIZE(1, '82mm', '20mm', '');
                this.createTest()
                LODOP.PREVIEW();
            },
            /*打印设计*/
            printDesign() {		
                LODOP.PRINT_DESIGN();		
            },
            createTest(){
                LODOP.ADD_PRINT_HTM("0", "0mm", "40mm", "20mm", this.$refs.form1.innerHTML);
                LODOP.ADD_PRINT_HTM("0", "43mm", "40mm", "20mm", this.$refs.form1.innerHTML);
                LODOP.ADD_PRINT_BARCODE("5mm", "3mm", "123px", "36px", "128Auto", "803040202dz")
                LODOP.ADD_PRINT_BARCODE("5mm", "46mm", "123px", "36px", "128Auto", "803040202dz")
            },
        }
    }
    </script>