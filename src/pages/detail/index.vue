<template>
	<div class="detail">
		<info
			:object="{
				title: detailData.title,
				time: getTime(detailData.createTime)
			}"
		/>
		<page-width>
			<div class="html" v-html="detailData.decs"></div>
		</page-width>
	</div>
</template>
<script>
import info from '@/components/info'
import pageWidth from '@/components/max-width'
import apis from '@/request/index'
export default {
	components: {
		info,
		pageWidth
	},
	data() {
		return {
			detailData: {}
		}
	},
	async mounted() {
		let detailRes = await apis.getPostDetail({
			id: this.$route.query.postId
		})
		this.detailData = detailRes.data
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
.html {
	margin-top: 20px;
}
</style>
