<template>
	<div class='activity'>

		<div class='activity-item border-right'>
			<img src="@/assets/img/active1.png">
		</div>

		<div class='activity-item'>
			<img src="@/assets/img/active2.png">
		</div>
		
	</div>
</template>


<style scoped>
.activity{
	position: relative;
	display: flex;
	background: #fff;
	border-bottom: 0.6rem solid #eee;
}
.activity .activity-item{
	flex:1;
	font-size:1.6rem;
	text-align: center;
	height: 8rem;

}
.activity-item.border-right {
    border-right: 1px solid #eee;
}
.activity .activity-item img{
	width:100%;
	height: 100%;
}
</style>