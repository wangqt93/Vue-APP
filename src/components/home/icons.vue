<template>
    <div id='Icons'>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for='item in page'>
                <div class=icons v-for='i in item'>
                    <img :src='i.imgUrl'>
                    <p>{{i.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                swiperOptions: {
                    pagination: {   //设置分页器（小圆点）
                        el: '.swiper-pagination',
                    },
                },
                arr:[
				{
					id:0,
					imgUrl:'img/icons1.png',
					title:"国内游"
				},
				{
					id:1,
					imgUrl:'img/icons2.png',
					title:"出境游"
				},
				{
					id:2,
					imgUrl:'img/icons3.png',
					title:"周边游"
				},
				{
					id:3,
					imgUrl:'img/icons4.gif',
					title:"当地玩乐"
				},
				{
					id:4,
					imgUrl:'img/icons5.png',
					title:"活动赛事"
				},
				{
					id:5,
					imgUrl:'img/icons6.png',
					title:"摄影游"
				},
				{
					id:6,
					imgUrl:'img/icons7.png',
					title:"亲子游"
				},
				{
					id:7,
					imgUrl:'img/icons8.png',
					title:"户外游"
				},
				{
					id:8,
					imgUrl:'img/icons9.png',
					title:"主题游"
				},
				{
					id:9,
					imgUrl:'img/icons1.png',
					title:"定制游"
				}
                ]
            }
        },
        computed: {
            page(){
                let pages = []
                this.arr.forEach((item,index)=>{
                   let idx = Math.floor(index/8)
                   if(!pages[idx]){
                       pages[idx] = []
                   }
                   pages[idx].push(item)
                })
                return pages
            }
        }
    }
</script>
<style scoped>
    .swiper-container {
        height: 15rem;
        margin-top: 1rem; 
    }
    .swiper-wrapper {
        height: 16rem;
        margin: 1rem 0; 
    }
    .swiper-wrapper .icons {
        float: left;
        width: 25%;
        text-align: center;
    }
    .icons>img {
        width:3.5rem;
        height: 3.5rem;
    }
</style>