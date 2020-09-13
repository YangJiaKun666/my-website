<template>
	<div :class="['index__welcome__title', isLoaded && 'show-active']">
		<div class="index__welcome__title__text">
			welcome to my website
		</div>
		<div class="index__welcome__subtitle">
			欢迎访问我的个人网站^-^！
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isLoaded: false
		}
	},
	mounted() {
		setTimeout(() => {
			this.isLoaded = true
		}, 500)
	}
}
</script>
<style lang="less" scoped>
.index__welcome__title {
	position: absolute;
	top: 36vh;
	left: 13vw;
	opacity: 0;
	transform: translateX(-200px);
	transition: all 0.4s ease-out;
	&__text {
		font-size: 65px;
		font-style: italic;
		position: relative;
		background: linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4);
		background-clip: text;
		color: transparent;
	}
	&__text::after,
	&__text::before {
		position: absolute;
		height: 4px;
		border-radius: 10px;
		background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
		width: 0;
		transition: all 0.3s linear 0.3s;
	}
	&__text::after {
		bottom: -5px;
		left: 0;
		content: ' ';
	}
	&__text::before {
		top: -5px;
		right: 0;
		font-size: 12px;
		content: ' ';
	}
}
.index__welcome__subtitle {
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	position: absolute;
	top: -20px;
	left: 40px;
}
.show-active {
	opacity: 1;
	transform: translateX(0);
}
.show-active .index__welcome__title__text::after {
	width: 80%;
}
.show-active .index__welcome__title__text::before {
	width: 55%;
}
</style>
