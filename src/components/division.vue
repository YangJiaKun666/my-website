<template>
	<div class="division">
		<div class="division-text">
			{{ title }}
			<span class="sub-title">{{ subTitle }}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		subTitle: String
	}
}
</script>
<style lang="less" scoped>
.division {
	width: 100%;
	position: relative;
	height: 2px;
	margin: 60px 0 30px;
	.division-text {
		position: absolute;
		transform: translate(20px, -100% + 6px);
		font-size: 18px;
		font-style: italic;
		font-weight: bold;
		.sub-title {
			font-style: normal;
			font-size: 12px;
			margin-left: 5px;
		}
	}
}
</style>
