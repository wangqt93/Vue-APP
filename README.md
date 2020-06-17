步骤一：样式初始化
css样式初始化，引入reset.css

步骤二：移动端click300毫秒点击延迟
1.引入淘宝移动端的 移动端适配
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
2.安装FastClick
cnpm i fastclick --save
//在main.js中import 
import FastClick from 'fastclick'
FastClick.attach(document.body)

步骤三：组件header
flex/positon/字体图标

步骤四：swiper组件
安装，使用swiper插件

..........

mock数据，父组件Home，模拟一次性得到所有子组件数据