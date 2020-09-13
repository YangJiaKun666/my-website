<template>
	<div class="list-title">
		<div class="list-title-text">
			<div class="title" v-if="object.title">{{ object.title }}</div>
			<div class="time" v-if="object.time">{{ object.time }}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		object: {
			type: Object,
			default: () => {
				return {}
			}
		}
	}
}
</script>
<style lang="less" scoped>
.list-title {
	height: 350px;
	background: url('../assets/background.jpg') no-repeat;
	position: relative;
	.list-title-text {
		width: 100%;
		height: 100%;
		background: rgba(225, 225, 225, 0.3);
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.title {
			font-weight: bold;
			font-size: 30px;
		}
		.time {
			font-size: 16px;
			font-weight: bold;
			margin-top: 10px;
		}
	}
}
</style>
