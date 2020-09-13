<template>
	<div>
		<div class="header">
			<div :style="{ display: 'flex', alignItems: 'center' }">
				<div class="header_meun" @click="showdialog = true">MENU</div>
				<div
					class="nav-bar"
					v-if="$route.path !== '/'"
					@click="$router.replace('/')"
				>
					<span></span>
					返回首页
				</div>
			</div>
			<div
				:class="[
					'header_toggle',
					$store.state.theme === 'dark' ? 'dark' : 'light'
				]"
				@click="changeTheme"
			>
				{{ $store.state.theme === 'dark' ? 'dark' : 'light' }}
				<div class="header_toggle_block"></div>
			</div>
		</div>
		<transition name="fade">
			<div class="dialog" @click="showdialog = false" v-show="showdialog">
				<transition name="slice-left">
					<div
						v-show="showdialog"
						@click.stop
						class="dialog_box theme-background-blur"
					>
						<h3 class="theme-text-color">站内搜索</h3>
						<query-input @hideDialog="showdialog = false" />
						<h3 class="theme-text-color">标签归档</h3>
						<div class="tags">
							<div
								class="tag theme-text-color"
								v-for="(item, index) in classData"
								:key="index"
								@click="goClassList(item)"
							>
								{{ item.className }}
							</div>
						</div>
					</div>
				</transition>
			</div>
		</transition>
	</div>
</template>
<script>
import queryInput from './input'
import apis from '@/request/index'
export default {
	data() {
		return {
			showdialog: false,
			classData: []
		}
	},
	components: {
		queryInput
	},
	async mounted() {
		let classRes = await apis.getClassData()
		this.classData = classRes.data
	},
	methods: {
		changeTheme() {
			let type = null
			if (this.$store.state.theme === 'dark') {
				type = 'light'
			} else {
				type = 'dark'
			}
			this.$store.commit('toggleTheme', type)
		},
		goClassList(item) {
			this.$router.push({
				path: '/blank',
				query: { classId: item.classId, className: item.className }
			})
			this.showdialog = false
		}
	}
}
</script>
<style lang="less" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100px;
	width: 100%;
	padding: 0 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	.header_meun {
		opacity: 0.5;
		letter-spacing: 2px;
		width: 110px;
		text-align: center;
		line-height: 34px;
		border-radius: 6px;
		font-size: 20px;
		cursor: pointer;
		transition-duration: 0.2s;
	}
	.header_meun:hover {
		opacity: 1;
	}
	.header_toggle {
		cursor: pointer;
		line-height: 30px;
		text-align: center;
		box-sizing: border-box;
		font-size: 14px;
		border-radius: 999px;
		height: 30px;
		width: 80px;
		position: relative;
		transition-duration: 0.5s;
		.header_toggle_block {
			position: absolute;
			z-index: 1;
			width: 26px;
			height: 26px;
			left: 2px;
			border-radius: 50%;
			transition-duration: 0.5s;
			top: 50%;
			transform: translate(0, -50%);
		}
	}
	.dark {
		background: #464646;
		color: #fff;
		padding: 0 30px 0 5px;
		.header_toggle_block {
			background: #eaeaea;
			transform: translate(80px - 31px, -50%);
		}
	}
	.light {
		background: #eaeaea;
		color: #464646;
		padding: 0 5px 0 30px;
		.header_toggle_block {
			background: #464646;
			transform: translate(0, -50%);
		}
	}
}
.nav-bar {
	margin-left: 20px;
	cursor: pointer;
	font-size: 14px;
	span::after {
		content: '\f015';
		font-size: 16px;
	}
}

.dialog {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	display: flex;
	justify-content: flex-start;
	.dialog_box {
		backdrop-filter: blur(8px);
		height: 100%;
		width: 350px;
		box-sizing: border-box;
		padding: 0 20px;
		h3 {
			margin: 16px 0;
		}
		.tags {
			display: flex;
			flex-wrap: wrap;
			.tag {
				font-size: 14px;
				font-weight: bold;
				font-style: italic;
				margin-right: 14px;
				margin-bottom: 14px;
				cursor: pointer;
				transition-duration: 0.1s;
				position: relative;
			}
			.tag:hover {
				transform: scale(1.1);
			}
		}
	}
}
</style>
