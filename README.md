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

axios 去请求 数据
cnpm i axios --save
//main.js
import axios form 'axios'
Vue.prototype.$http = axios
//Home
mounted(){
	this.$thhp.get('http://localhost:8080/static/mock/dataHome.json')
	.then((res)=>{
		console.log(res)
	})
}


better-scroll插件
实现触屏滚动与点击字母跳转对应dom节点
问题：开发者工具，模拟手机触屏无法滚动页面，
解决：需要切换到其他型号的模拟手机上，可以解决
