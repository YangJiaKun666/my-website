<template>
	<div class="class-list">
		<info :object="{ title: $route.query.className }" />
		<page-width>
			<div v-if="!isEmpty">
				<post-box
					v-for="(item, index) of postData"
					:key="index"
					:item="item"
				/>
			</div>
			<paging
				v-if="!isEmpty"
				:total="total"
				:currentPage="putData.pageNum"
				:pageSize="putData.pageSize"
				@handlerCurrentPage="handlerCurrentPage"
			/>
			<data-empty v-if="isEmpty"></data-empty>
		</page-width>
	</div>
</template>
<script>
import pageWidth from '@/components/max-width'
import info from '@/components/info'
import postBox from '@/components/post-box'
import dataEmpty from '@/components/empty'
import paging from './components/paging'
import apis from '@/request/index'
export default {
	components: {
		pageWidth,
		postBox,
		dataEmpty,
		info,
		paging
	},
	data() {
		return {
			postData: null,
			total: 0,
			putData: {
				classId: this.$route.query.classId || null,
				keyCode: this.$route.query.keyCode || null,
				pageNum: 1,
				pageSize: 10
			}
		}
	},
	computed: {
		isEmpty() {
			if (this.postData === null || this.postData.length === 0) {
				return true
			} else {
				return false
			}
		}
	},
	async mounted() {
		this.getData()
	},
	methods: {
		handlerCurrentPage(num) {
			this.putData.pageNum = num
			this.getData()
		},
		async getData() {
			let postRes = await apis.getPostDataByKeycode(this.putData)
			this.postData = postRes.data
			this.total = postRes.total
		}
	}
}
</script>
<style lang="less" scoped></style>
