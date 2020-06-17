<template>
	<div class='header'>
		<router-link to='/'>
			<div class='iconfont icon-left' ></div>
		</router-link>
		<div class='header-title'>城市选择</div>

	</div>
</template>
<style scoped>
    .header {
        height: 4.5rem;
        background: #00bcd4;
		position: relative;
		
    }
	.header div {
		color: #fff;
		position: absolute;
		top: 50%;
		font-size: 2rem;
	}
	.iconfont {
		left: 1rem;
		transform: translateY(-50%);
		font-weight: 600;
	}
	.header-title {
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>
<script type="text/javascript">
export default {
}
</script>