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
        props: ['iconsList'],
        data(){
            return {
                swiperOptions: {
                    pagination: {   //设置分页器（小圆点）
                        el: '.swiper-pagination',
                    },
                },
            }
        },
        computed: {
            page(){
                let pages = []
                this.iconsList.forEach((item,index)=>{
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