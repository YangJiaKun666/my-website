<template>
	<div
		class="post-box"
		@click="$router.push({ path: '/detail', query: { postId: item.id } })"
	>
		<div class="post-title">{{ item.title }}</div>
		<div class="post-info">
			<span class="post-tag theme-background theme-text-color">
				{{ item.className }}
			</span>
			<span class="post-time">
				发布时间：{{ getTime(item.createTime) }}
			</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	methods: {
		getTime(date) {
			date = new Date(date)
			let y = date.getFullYear()
			let m =
				date.getMonth() + 1 < 10
					? '0' + (date.getMonth() + 1)
					: date.getMonth() + 1
			let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
			return `${y}-${m}-${d}`
		}
	}
}
</script>
<style lang="less" scoped>
.post-box {
	width: 100%;
	display: flex;
	height: 70px;
	padding: 10px;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	.post-title {
		font-size: 16px;
		max-width: 74%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.post-info {
		font-size: 12px;
		display: flex;
		align-items: flex-end;
		.post-tag {
			font-size: 12px;
			margin-right: 10px;
			padding: 2px 10px;
			font-weight: bold;
			border-radius: 4px;
			transform: scale(0.9);
		}
	}
}
.post-box:last-child {
	margin-bottom: 30px;
}
</style>
