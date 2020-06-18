<template>
	<div ref='container' class='container'>
		<div>
			<!--hot-->
			<div class='hot list'>
				<div class='title'>热门城市</div>
				<ul class='hot-list'>
					<li class='hot-item' v-for='item in hotCities' :key='item.id' @click='changeCityName(item.name)'>
					{{item.name}}
					</li>
				</ul>
			</div>
			<!--sort-->
			<div class='sort list'>
				<div class='title'>字母排序</div>
				<ul class='sort-list'>

					<li class='sort-item' v-for='(val,key) in cities' @click='changeSort(key)'>
						{{key}}
					</li>
				</ul>
			</div>
			<!--list-->
			<div class='addr list' ref='indexlist'>
				<div v-for='(val,key) in cities' :ref='key'>
					<div class='title'>{{key}}</div>
					<ul class='list-msg'>
						<li class='list-item' v-for='item in val'  @click='changeCityName(item.name)'>
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
	props:['hotCities','cities'],
	data () {
		return {
			scroll:''
		}
	},
	mounted(){
			this.$nextTick(()=>{
				let container =  this.$refs['container']
				this.scroll = new BScroll(container)

			})
				
	},
	methods:{
			changeSort(val){
				this.scroll.scrollToElement(this.$refs[val][0])
			},
			changeCityName(val){
				this.changeCity(val)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])	

	}
}
</script>

<style scoped>
	.container {
		position: absolute;
		top:4.5rem;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
	.title {
		height: 2.6rem;
		background: #f5f5f5;
		padding-left: 1rem;
	}
	.hot li {
		width: 33.3333%;
	}
	.sort li {
		width: 16.6667%;
	}
	.addr li {
		width: 25%;

	}
	.list ul {
		display: flex;
		flex-wrap: wrap; 
	}
	.list li {
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
		text-align: center;
		line-height: 5rem;
	}
</style>
