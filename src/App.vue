<template>
  <div class="app">
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>
<script>
  import Header from '@/components/home/header.vue'
  import Swiper from '@/components/home/swiper.vue'
  export default {
      components: {
        Header,
        Swiper
      }
  }
</script>

