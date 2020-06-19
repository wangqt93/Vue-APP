<template>
    <div class="home">
        <Header></Header>
        <Swiper :swiperList='swiperList'></Swiper>
        <Icons :iconsList='iconsList'></Icons>
        <Location></Location>
        <Active></Active>
        <Hot :hotList='hotList'></Hot>
        <Like :likeList='likeList'></Like>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
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
      },
      data(){
        return {
          swiperList: [],
          iconsList: [],
          hotList: [],
          likeList: [],
          changecity: ''
        }
      },
      computed:{
        ...mapState(['city'])
      },
      methods: {
        getHttp(){
          this.$http.get('http://localhost:8080/mock/dataHome.json')
            .then((res)=>{
              let data = res.data.data
              console.log(this.city)
              data.forEach((item,index)=>{
                if(item.city == this.city){
                    this.swiperList = item.swiperList
                    this.iconsList = item.iconsList
                    this.hotList = item.hotList
                    this.likeList = item.likeList
                }
              })
          })
        }
      },
      mounted(){
        this.changecity = this.city
        this.getHttp()
    
      },
      activated(){
        if(this.city !=this.changecity){
          this.getHttp()
          this.changecity = this.city
        }
      }
  }

</script>