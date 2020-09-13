<template>
	<div class="paging">
		<div
			:class="['paging-prev', currentPage === 1 && 'disabled']"
			@click="handlePrev"
		></div>
		<div
			:class="['paging-page', currentPage === item && 'current-page']"
			v-for="(item, index) of getPageTotal"
			:key="index"
			@click="handlePage(item)"
		>
			{{ item }}
		</div>
		<div
			:class="[
				'paging-next',
				currentPage === Math.ceil(total / pageSize) && 'disabled'
			]"
			@click="handleNext"
		></div>
	</div>
</template>
<script>
export default {
	props: {
		currentPage: {
			type: [String, Number],
			default: 1
		},
		pageSize: {
			type: [String, Number],
			default: 10
		},
		total: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		getPageTotal() {
			let arr = []
			let page = Math.ceil(this.total / this.pageSize)
			for (let i = 1; i <= page; i++) {
				arr.push(i)
			}
			return arr
		}
	},
	methods: {
		handlePrev() {
			if (this.currentPage === 1) return
			let item = this.currentPage - 1
			this.$emit('handlerCurrentPage', item)
		},
		handleNext() {
			if (this.currentPage === Math.ceil(this.total / this.pageSize))
				return
			let item = this.currentPage + 1
			this.$emit('handlerCurrentPage', item)
		},
		handlePage(item) {
			if (this.currentPage === item) return
			this.$emit('handlerCurrentPage', item)
		}
	}
}
</script>
<style lang="less" scoped>
.paging {
	display: flex;
	align-items: center;
	height: 20px;
	.paging-prev,
	.paging-page,
	.paging-next {
		font-size: 16px;
		border-radius: 4px;
		height: 100%;
		line-height: 20px;
		font-weight: bold;
		opacity: 0.5;
		cursor: pointer;
		transition-duration: 0.2s;
	}
	.paging-prev,
	.paging-next {
		font-size: 18px;
	}
	.paging-prev,
	.paging-page {
		margin-right: 24px;
	}
	.paging-prev::after {
		content: '\f100';
	}
	.paging-next::after {
		content: '\f101';
	}
	.paging-prev:hover,
	.paging-page:hover,
	.paging-next:hover {
		opacity: 1;
	}
	.current-page {
		opacity: 1 !important;
	}
	.disabled {
		cursor: not-allowed;
	}
}
</style>
