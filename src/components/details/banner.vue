<template>
    <div class="banner">
        <div class="banner-top" @click='open'>
                <img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg" alt="">
            <div class='message'>
                <div>
                    <div class="iconfont icon-img"></div>
                    <p>3</p>
                </div>
                <p>金色湖风景区（AAAA景区）</p>
            </div>
        </div>
        <div class="image" v-show='show' @click='close'>
            <swiper :options="swiperOptions" @click='close'>
                <swiper-slide v-for='i in bannerList'>
                    
                        <img :src="i.imgUrl" alt="">
                    
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                show:false,
                swiperOptions: {
                    pagination: {   //设置分页器（小圆点）
                        el: '.swiper-pagination',
                        type:"fraction"
                    },
                },
                bannerList:[
                    {
                        id:"01",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
                    },
                    {
                        id:"02",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
                    },
                    {
                        id:"03",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
                    }
			    ]
            }
        },
        methods:{
            open(){
                this.show = true
            },
            close(){
                this.show = false
            }
        }
    }
</script>
<style scoped>
    .banner-top {
        height: 20rem;
        border: 1px solid;
        position: relative;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .message {
        position: absolute;
        bottom: 1rem;
        left: 0.50rem;
        color: #fff;
    }
    .message>div {
        display: flex;
        width: 6rem;
        justify-content: space-evenly;
        align-items: center;
        border-radius:2rem;
        font-size: 1rem;
        background: rgba(0,0,0,0.5);

    }
    .message .icon-img {
        font-size: 1.4rem;
    }
    .image {
        position: fixed;
        background: black;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 99;
    }
    .image>img {
        height: 33.33%;
        width: 100%;
    }

</style>