<template>
    <div class="like">
        <div class="l-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <ul>
            <li v-for='item in arr'>
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
<script>
    export default {
        data(){
            return {
                arr: [
                        {
                            "id":"01",
                            "imgUrl":"http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
                            "title":"金海湖风景区",
                            "msg":"1341",
                            "pre":"18.8",
                            "map":"平谷区"
                        },
                        {
                            "id":"02",
                            "imgUrl":"http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg",
                            "title":"北京国际鲜花港",
                            "msg":"1900",
                            "pre":"28.8",
                            "map":"顺义区"
                        },
                        {
                            "id":"03",
                            "imgUrl":"http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
                            "title":"金海湖风景区01",
                            "msg":"1341",
                            "pre":"18.8",
                            "map":"平谷区"
                        },
                        {
                            "id":"04",
                            "imgUrl":"http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg",
                            "title":"北京国际鲜花港02",
                            "msg":"1900",
                            "pre":"28.8",
                            "map":"顺义区"
                        }  
                ]
            }
        }
    }
</script>
