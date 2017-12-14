var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: [
        './src/main',
        './src/assets/scss/common.css',
        './Assets/CSS/global.css',
        './Assets/CSS/main.css',
        './Assets/CSS/songping.css',
        './Assets/CSS/weipai.css',
        './Assets/CSS/icons.css',
        './Plugins/font-awesome/css/font-awesome.css',
        './Plugins/jQueryMobile/css/jquery.mobile.structure-1.4.5.css',
        './Plugins/jQueryMMenu/css/jquery.mmenu.all.css',
        './Plugins/jQueryMMenu/extensions/themes/jquery.mmenu.themes.css',
        './Plugins/jQueryMMenu/extensions/pageshadow/jquery.mmenu.pageshadow.css'
    ],
    // 输出
    output: {

        path: path.join(__dirname, './dist'),
        // 文件地址，使用绝对路径形式

        publicPath: '',
        // 公共文件生成的地址
        chunkFilename: 'js/[name].[chunkhash:8].js',//异步加载文件的命名
        filename: 'js/[name].min.js'//entry入口文件
        //[name]这里是webpack提供的根据路口文件自动生成的名字
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    // 加载器
    module: {
       loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader")
        }, {
            test: /\.scss$/,
           loader: "style!css!sass"
        },  {
            test: /\.less$/,
            loader: "style!css!less"
        },{
            test: /\.js$/,
            include: [
                // 只去解析运行目录下的 src 文件夹
                path.join(process.cwd(), './src')
              ],
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            //loader: "url-loader?limit=8192"
            loader: "file-loader?name=img/[hash:8].[name].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=img/[hash:8].[name].[ext]"
        }, {
            test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=img/[hash:8].[name].[ext]"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    plugins:[
        //提公用js到common.js文件中
        // new webpack.optimize.CommonsChunkPlugin('js/common.min.js'),
        //将样式统一发布到style.css中
        new ExtractTextPlugin('css/style.min.css'),
        // // 使用 ProvidePlugin 加载使用率高的依赖库
        // new webpack.ProvidePlugin({
        //   $: 'webpack-zepto'
        // }),
        new HtmlWebpackPlugin({
         template: 'duobao.html',
        //  filename:'duobao.html',//输出文件名，默认是index
         minify:{    //压缩HTML文件
                 removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            } // Load a custom template
       }),
       new webpack.BannerPlugin("k.liu")//注意这是一个数组..
    ],
    // .vue的配置。需要单独出来配置，其实没什么必要--因为我删了也没保错，不过这里就留这把，因为官网文档里是可以有单独的配置的。
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            'vue': 'vue/dist/vue.js',
            'vue-swiper':path.join(__dirname, './src/plugins/swiper/vue-swiper'),
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    }
    // externals: {
    //     //  其他js引用jQuery时编译类似var $ = jQuery;
    //     "vue": "Vue",
    //     "vue-router":"VueRouter"
    // }
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
   // devtool: '#source-map'
   // devtool:false
};
