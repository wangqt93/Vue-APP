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
            <li v-for='item in arr'>
                <img :src="item.imgurl" alt="">
                <p>{{item.title}}</p>
                <p>￥{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr:[
                    {
                        id:0,
                        imgurl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_150x150_8156d2ff.jpg',
                        title: '上海迪士尼乐园',
                        price: 199
                    },
                    {
                        id:1,
                        imgurl:'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_150x150_90f7eeef.jpg',
                        title: '东方明珠',
                        price: 30
                    },
                    {
                        id:2,
                        imgurl:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg',
                        title: '八达岭长城',
                        price: 25
                    },
                    {
                        id:3,
                        imgurl:'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg',
                        title: '水立方',
                        price: 20
                    },
                    {
                        id:4,
                        imgurl:'http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg',
                        title: '定陵',
                        price: 50
                    },
                ]
            }
        }
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
    li :nth-child(3){
        color:#ff8300;
    }
    li :nth-child(3)::after{
        content: '起';
        color: #000;
    }
    
</style>