<template>
  <div class="app">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
  </div>
</template>
<script>
  import Header from '@/components/home/header.vue'
  import Swiper from '@/components/home/swiper.vue'
  import Icons from '@/components/home/icons.vue'

  export default {
      components: {
        Header,
        Swiper,
        Icons
      }
  }
</script>

