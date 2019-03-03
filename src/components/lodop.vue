<template>
<div class="demo">
    <form id="form1" hidden>
        <table border="1" width="250" cellspacing="0" style="border-collapse:collapse;border:solid 1px black;">
            <tr style="display:flex;flex-direction:row;justify-content: space-between">
                <td style="display: flex;flex-direction:row;border:none;">
                    <span style="font-weight:bold;">款号：</span><span style="font-weight:none">P01361</span>
                </td>
                <td style="font-weight:bold;border:none">￥520</td>
            </tr>
            <tr style="display:flex;flex-direction:row;justify-content: space-between">
                <td style="display: flex;flex-direction: row;border:none">
                    <span style="font-weight:bold;">名称：</span><span style="font-weight:none">长袖三叶草</span>
                </td>
            </tr>
            <tr style="display:flex;flex-direction:row;justify-content: space-between">
                <td style="display: flex;flex-direction: row;border:none">
                    <span style="font-weight:bold;">颜色：</span><span style="font-weight:none">白色</span>
                </td>
                <td style="display: flex;flex-direction: row;border:none">
                    <span style="font-weight:bold;">尺码：</span><span style="font-weight:none">S</span>
                </td>
            </tr>
            <tr style="height:50px;"><td style="border:none"></td>
            </tr>
        </table>
        <object id="LODOP1" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=200 height=300> 
            <param name="Caption" value="显示区">
            <param name="Border" value="0">
            <param name="Color" value="white"> 
            <embed id="LODOP_EM1" TYPE="application/x-print-lodop" width=800 height=400 border=0 Color="white" PLUGINSPAGE="install_lodop.exe">
        </object> 
    </form>




  </form>
    <el-button @click="printPdf" >打印</el-button>
 </div>
</template>
 
<script>
 
 import {getLodop} from '../lib/LodopFuncs.js'
 
 export default {
  name: "demo",
  data() {
   return {}
  },
    methods: {
    printPdf() {
        alert("ceshi")
        let LODOP = getLodop(document.getElementById('LODOP1'),document.getElementById('LODOP_EM1'));
        LODOP.SET_PRINT_PAGESIZE(1,1500,320,"");
        this.createAllPages()
        LODOP.PREVIEW();
    },
    createAllPages(){
        for(let i=0; i<4; i++){
            LODOP.NewPage();
            LODOP.ADD_PRINT_HTM(0, 0, 350, 600, document.getElementById("form1").innerHTML);
            LODOP.ADD_PRINT_HTM(0, 280, 350, 600, document.getElementById("form1").innerHTML);
            let num1 = parseInt(parseInt(Math.random()*(99999-10000+1)+10000,10))
            let num2 = parseInt(parseInt(Math.random()*(99999-10000+1)+10000,10))
            LODOP.ADD_PRINT_BARCODE(65,30,200,47,"128Auto",num1.toString())
            LODOP.ADD_PRINT_BARCODE(65,310,200,47,"128Auto",num2.toString())
        }
    }
    // 查询数据
    // printPdf() {
    //     let LODOP = getLodop(document.getElementById('LODOP1'),document.getElementById('LODOP_EM1'));
    //     LODOP.SET_PRINT_PAGESIZE(1,2300,300,"");
    //     this.createAllPages();
    //     LODOP.PREVIEW();
    // },
    // createAllPages(){	
	// 	for (let i = 1; i < 5; i++) {
    //         LODOP.NewPage();
    //         LODOP.ADD_PRINT_HTM(0, 0, 350, 600, document.getElementById("form1").innerHTML);
	// 		LODOP.ADD_PRINT_BARCODE(65,30,200,47,"128Auto","abcd12345678");
	// 	}			
	// }
  }
 }
</script>






