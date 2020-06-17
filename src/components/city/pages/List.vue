<template>
	<div ref='container' class='container'>
		<div>
			<!--hot-->
			<div class='hot'>
				<div class='title'>热门城市</div>
				<ul class='hot-list'>
					<li class='hot-item' v-for='item in hotCities' :key='item.id' @click='changeCityName(item.name)'>
						{{item.name}}
					</li>
				</ul>
			</div>

			<!--sort-->
			<div class='sort'>
				<div class='title'>字母排序</div>
				<ul class='sort-list'>

					<li class='sort-item' 
					v-for='(val,key) in cities'
					@click='changeSort(key)'
					>
						{{key}}
					</li>
				</ul>
			</div>

			<!--list-->
			<div class='list'>
				<div v-for='(val,key) in cities' :ref='key'>
					<div class='title'>{{key}}</div>
					<ul class='list-msg'>
						<li class='list-item'
						v-for='item in val'
						:key='item.id'
						@click='changeCityName(item.name)'
						>
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.title {
		height: 2.6rem;
		background: #eee;
		padding-left: 1rem;
	}
	.hot ul {
		display: flex;
		flex-wrap: wrap; 
	}
	.hot li {
		width: 33.3333%;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
		text-align: center;
		line-height: 5rem;
	}
	.sort ul {
		display: flex;
		flex-wrap: wrap; 
	}
	.sort li {
		width: 16.6667%;
		text-align: center;
		line-height: 5rem;
	    border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
	}
	.list ul {
		display: flex;
		flex-wrap: wrap; 		
	}
	.list li {
		width: 25%;
		text-align: center;
		line-height: 5rem;
	    border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;		
	}



</style>
<script type="text/javascript">
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
	props:['hotCities','cities'],
	data () {
		return {
			scroll:''
		}
	},
	mounted(){
		
		let container = this.$refs['container'];
		this.scroll = new BScroll(container)
	},
	methods:{
		changeSort(sortName){
			this.scroll.scrollToElement(this.$refs[sortName][0])
		},
		changeCityName(cityName){
				
			this.changeCity(cityName);

			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	}
}
</script>

