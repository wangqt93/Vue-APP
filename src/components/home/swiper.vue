<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for='i in swiperList'>
      <img :src="i.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    props: ['swiperList'],
    data(){
      return {
        swiperOptions: {
          pagination: {   //设置分页器（小圆点）
            el: '.swiper-pagination',
            observer: true,
            observeParents: true,
          },
        },

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