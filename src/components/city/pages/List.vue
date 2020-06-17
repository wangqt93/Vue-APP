<template>

	<div ref='container' class='container'>
		<div>
			<!--hot-->
			<div class='hot'>
				<div class='hot-title'>热门城市</div>
				<ul class='hot-list'>
					<li class='hot-item'
					v-for='item in hotCities'
					:key='item.id'
					@click='changeCityName(item.name)'
					>
						{{item.name}}
					</li>
				</ul>
			</div>

			<!--sort-->
			<div class='sort'>
				<div class='sort-title'>字母排序</div>
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
				<div 
				v-for='(val,key) in cities'
				:ref='key'
				>
					<div class='list-title'>{{key}}</div>
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
//http://ustbhuangyi.github.io/better-scroll/doc/api.html
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

