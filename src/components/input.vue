<template>
	<div class="input_box">
		<input
			class="input"
			placeholder="搜索关键字"
			type="text"
			v-model="keyCode"
		/>
		<div class="button" @click="goList">
			GO！
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			keyCode: ''
		}
	},
	methods: {
		goList() {
			let obj = {
				keyCode: this.keyCode,
				className: this.keyCode
			}
			this.$router.push({
				path: '/blank',
				query: obj
			})
			this.keyCode = ''
			this.$emit('hideDialog')
		}
	}
}
</script>
<style lang="less" scoped>
.input_box {
	width: 100%;
	height: 30px;
	display: flex;
	.input {
		height: 100%;
		width: 85%;
		box-sizing: border-box;
		background: transparent;
		border: 0;
		outline: 0;
	}
	.button {
		width: 15%;
		height: 100%;
		text-align: center;
		font-weight: bold;
		line-height: 30px;
		cursor: pointer;
	}
}
</style>
