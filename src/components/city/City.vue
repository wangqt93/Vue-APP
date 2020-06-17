<template>
	<div class='city'>
		<CityHeader></CityHeader>
		<CityList :hotCities='hotCities' :cities='cities'></CityList>
	</div>
</template>

<script type="text/javascript">
import CityHeader from './pages/Header'
import CityList from './pages/List'
export default {
	components:{
		CityHeader,
		CityList
	},
	data () {
		return {
			hotCities:[],
			cities:{}
		}
	},
	mounted(){
		this.$http.get('http://localhost:8080/mock/city.json')
		.then((res)=>{
			let data = res.data.data;
			this.hotCities=data.hotCities;
			this.cities=data.cities;
		})
	}
}
</script>

<style scoped>
.city{
	background: #f5f5f5;
}
</style>