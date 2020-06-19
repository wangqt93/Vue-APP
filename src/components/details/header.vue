<template>
    <div class="header">
        <div class="container" v-show='showHeader' @click='change'>
            <div class="left"></div>
        </div>
        <div class='header-top' v-show='!showHeader' :style='styleOpacity'>
			<span class='iconfont icon-left' @click='change'></span>
            <p>北京国际鲜花港</p>
		</div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                showHeader: true,
                styleOpacity: 0
            }
        },
        mounted(){
            window.addEventListener('scroll',()=>{
                let top = document.documentElement.scrollTop
                if(top>45){
                    let opacity = top/130
                    this.showHeader = false
                    this.styleOpacity = {opacity: opacity}
                }else{
                    this.showHeader = true
                }
            })
        },
        methods:{
            change(){
                this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 2.8rem;
        height:2.8rem;
        border: 1px solid;
        border-radius: 50%;
        opacity: .5;
        position: fixed;
        top: 1rem;
        left: 1rem;
        background: #000;
    }
    .left {
        width:1rem;
        height:1rem;
        border-left:2px solid #fff;
        border-top: 2px solid #fff;
        position: absolute;
        top: 30%;
        left: 38%;
        transform: rotate(-45deg);
    }
    .header-top {
        position: fixed;
        top: 0;
        left: 0;
        background:#00bcd4;
        width: 100vw;
        height: 4rem;
    }
    .header-top>p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .header-top>span {
        position: absolute;
        font-size: 1.8rem;
        font-weight: 800;
        color: #fff;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }
</style>