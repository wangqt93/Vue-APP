<template>
    <div class="like">
        <div class="l-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <ul>
            <li v-for='item in likeList' @click='getDetail(item.title)' ref='title'>
                <img :src="item.imgUrl" alt="">
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.msg}}条评论</p>
                    <div class='map'>
                        <p>￥{{item.pre}}</p>
                        <p>{{item.map}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
            props: ['likeList'],
            methods:{
                getDetail(val){
                    this.$router.push('/detail')
                }
                
            }

    }
</script>
<style scoped>
    .l-top {
        font-size: 1.8rem;
        padding: 1rem;

    }
    .l-top>img{
        height: 1.5rem;
    }
    
    ul li {
        display: flex;
        padding:1rem;
        border-bottom: 1px solid #eee;
    }
    li>div {
        width: 100%;
    }
    li>img {
        
        height: 12rem;
        margin-right: 1rem;   
    }
    li .map {
        display: flex;
        margin-top: 1rem;
        justify-content: space-between; 
    }
    .map :nth-child(1){
        color:#ff8300;
        font-size: 2rem;
    }
    .map :nth-child(1)::after{
        content: '起';
        color: #000;
        font-size: 1.4rem;
    }
</style>

