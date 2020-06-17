<template>
    <div class="hot">
        <div class="h-top">
            <div>
                <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
                <span>本周热门榜单</span>
            </div>

            <p>全部榜单></p>
        </div>
        <ul>
            <li v-for='item in hotList'>
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>￥{{item.mark}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['hotList']
    }

</script>
<style scoped>
    .hot .h-top {
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding: 0.5rem;
    }
    .h-top img {
      height: 1.6rem;  
    }
    .hot ul {
        display: flex;
        overflow-y: hidden;
        padding-bottom: 0.8rem;
    }
    ul li {
        padding-right: 0.75rem;
        text-align: center;
        margin: 0;
    }
    li img {
       height: 12rem;
    }
    li :nth-child(2){
        white-space: nowrap;
        overflow: hidden;
        
    }
    li :nth-child(3){
        color:#ff8300;
    }
    li :nth-child(3)::after{
        content: '起';
        color: #000;
    }
    
</style>