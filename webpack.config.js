var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var proxy = require('http-proxy-middleware')

module.exports = {
    mode: "production",
    entry: path.join(__dirname, './src/main.js'),   
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {test:/\.css$/, use:['style-loader', 'css-loader']},
            //name=[name].[ext]使用图片的原来名称，而不是进过hash后的图片名称
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use:['url-loader?limit=7631&name=[hash:8]-[name].[ext]']},      //处理css图片地址,limit限制的是图片的字节数，如果大于该数值，就不会进行base64转换
            //处理bootstrap字体图标
            {test: /\.(ttf|woff|woff2|eot|svg)$/, use: ['url-loader']},
            //处理ES高级语法
            {test: /\.js$/, use:'babel-loader',exclude:/node_modules/},  //不需要转换现有的node_modules包下面的文件
            //处理*.vue文件
            { test:/\.vue$/, use: ['vue-loader']},
        ]
    },
    performance: {  //去除文件大小限制WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB)
        hints: false
    },
    resolve: {  //修改vue被导入时候的路径
        alias: {
            //"vue$": "vue/dist/vue.js",    项目以runtime-only的形式运行
        }
    },
    devServer: {
        proxy: {
            '/api': {                                       //表示当前项目请求的key
                target: 'http://127.0.0.1:8000',            //需要代理的服务器路径
                pathRewrite: {'^/api': '/'},                //重写路径
                changeOrigin: true                          //设置跨域      
            }
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
}















