<template>
    <div class="home">
        <Header></Header>
        <Swiper></Swiper>
        <Icons></Icons>
        <Location></Location>
        <Active></Active>
        <Hot></Hot>
        <Like></Like>
    </div>
</template>
<script>
  import Header from '@/components/home/header.vue'
  import Swiper from '@/components/home/swiper.vue'
  import Icons from '@/components/home/icons.vue'
  import Location from '@/components/home/location.vue'
  import Active from '@/components/home/active.vue'
  import Hot from '@/components/home/hot.vue'
  import Like from '@/components/home/like.vue'
  export default {
      components: {
        Header,
        Swiper,
        Icons,
        Location,
        Active,
        Hot,
        Like
      }
  }

</script>