<template>
    <div class="location">
        <div class='l-left'>
            <div class="iconfont icon-location"></div>
            <p>定位失败</p>
        </div>
        <div class='l-right'>
            <div class="iconfont icon-play"></div>
            <p>玩水季</p>
        </div>
    </div>
</template>
<style scoped>
    .location {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #eee;
        border-bottom: 0.6rem solid #eee;
    }
    .location>div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding: 0.6rem;
    }
    .l-left {
        border-right: 1px solid #eee;
    }
    .l-left>div {
        color: rgba(0,0,0,0.3);
    }
</style>
