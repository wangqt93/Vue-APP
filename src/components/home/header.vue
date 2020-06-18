<template>
    <header>
        <div class="iconfont icon-left"></div>
        <div>
            <div class='iconfont icon-search'></div>
            <input type="text" value='' placeholder='输入城市/景点/游玩主题'>
        </div>
        <router-link to='/city'>
            <div class='iconfont icon-bottom'>{{city}}</div>
        </router-link>

        
        
    </header>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState(['city'])
        }
        
    }
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-around;
        align-items:center; 
        height: 4.5rem;
        background: #00bcd4;
        text-align: center;



    }
    header>:nth-child(2){
        display: flex;
        width:70%;
        height: 80%;
        align-items: center;
        position: relative;
    }
    header input {
        width: 100%;
        height: 80%;
        border: none;
        border-radius: 4px;
        outline: none;
    }
    header .icon-search{
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translateY(-50%);
        z-index: 100;
        color: rgba(0,0,0,0.3);
    }
    .iconfont{

        font-size: 2rem;
        color: block;

    }
    .iconfont.icon-left {
        font-size: 2.8rem;
        color: #fff;
        font-weight: 900;
    }
    .iconfont.icon-bottom {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 900;
    }
</style>