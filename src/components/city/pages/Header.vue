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
	.iconfont {
		position: absolute;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);
		font-size: 2rem;

	}
	.header-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 1.8rem;
	}
</style>
<script type="text/javascript">
export default {
}
</script>