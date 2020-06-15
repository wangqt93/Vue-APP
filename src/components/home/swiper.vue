<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for='i in arr'>
      <img :src="i.imgurl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    data(){
      return {
        swiperOptions: {
          pagination: {   //设置分页器（小圆点）
            el: '.swiper-pagination',
            observer: true,
            observeParents: true,
          },
        },
        arr: [
          {
            id: 0,
            imgurl: require('@/assets/img/swiper1.jpg')
          },
          {
            id: 1,
            imgurl: require('@/assets/img/swiper2.jpg')
          },
          {
            id:2,
            imgurl: require('@/assets/img/swiper3.jpg')
          },
          {
            id:3,
            imgurl: require('@/assets/img/swiper4.jpg')
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .swiper-container {
    height: 15rem;
    overflow: hidden;
  }
  .swiper-container img {
    width: 100%;
    height: 100%;
  }   
  .swiper-pagination >>> .swiper-pagination-bullet{   /*需要使用样式穿透，对全局的css样式覆盖*/
    background: #fff;   
  }
</style>