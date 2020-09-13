<template>
	<div class="empty">
		<img class="empty-img" src="@/assets/empty.png" />
		<div class="empty-text">抱歉，暂无相关内容！</div>
	</div>
</template>
<style lang="less" scoped>
.empty {
	padding: 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.empty-img {
		width: 300px;
	}
	.empty-text {
		margin-top: 20px;
		font-size: 14px;
		font-weight: bold;
		letter-spacing: 3px;
	}
}
</style>
