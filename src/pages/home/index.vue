<template>
	<div class="index">
		<div class="index__welcome">
			<logo />
		</div>
		<page-width>
			<division title="最新发布" subTitle="Latest release" />
			<div class="post-list" v-if="!isEmpty">
				<post-box
					v-for="(item, index) in postData"
					:key="index"
					:item="item"
				/>
			</div>
			<data-empty v-if="isEmpty"></data-empty>
		</page-width>
	</div>
</template>
<script>
import logo from './components/logo'
import pageWidth from '@/components/max-width'
import postBox from '@/components/post-box'
import division from '@/components/division'
import dataEmpty from '@/components/empty'
import apis from '@/request/index'
export default {
	components: {
		logo,
		pageWidth,
		postBox,
		division,
		dataEmpty
	},
	data() {
		return {
			postData: null
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
		let postRes = await apis.getNewData()
		this.postData = postRes.data
	}
}
</script>
<style lang="less" scoped>
.index {
	&__welcome {
		height: 100%;
		width: 100%;
		background: url('../../assets/background.jpg') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
}
</style>
