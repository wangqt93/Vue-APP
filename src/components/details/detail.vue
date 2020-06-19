<template>
    <div class="tails">
        <Banner></Banner>
        <Header></Header>
        <div style='height: 2000px'></div>
    </div>
</template>
<script>
import Banner from './banner.vue'
import Header from './header.vue'

export default {
    components: {
        Banner,
        Header
    },
    activated(){
        document.documentElement.scrollTop = 0 
    }
}

</script>
