<template>
	<div
		id="app"
		:class="$store.state.theme === 'dark' ? 'dark-theme' : 'light-theme'"
		@scroll="onScroll"
	>
		<query-header />
		<transition name="toggle-page" mode="out-in">
			<router-view class="router-view" />
		</transition>
		<img
			v-show="showBackBtn"
			class="back-top"
			@click="backTop"
			src="@/assets/backTop.png"
			alt=""
		/>
	</div>
</template>
<script>
import queryHeader from './components/header'
export default {
	components: {
		queryHeader
	},
	data() {
		return {
			showBackBtn: false
		}
	},
	methods: {
		onScroll(event) {
			let scrollTop = event.target.scrollTop
			if (scrollTop > 100) {
				this.showBackBtn = true
			} else {
				this.showBackBtn = false
			}
		},
		backTop() {
			let app = document.getElementById('app')
			app.scrollTop = 0
		}
	}
}
</script>
<style lang="less">
@import './styles/index.less';
@font-face {
	font-family: my-font;
	src: url('./fontawesome-webfont.ttf');
}
#app {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	font-family: my-font;
	.router-view {
		height: 100%;
		width: 100%;
		min-width: 1000px;
		box-sizing: border-box;
	}
}
#app::-webkit-scrollbar {
	width: 4px;
	height: 8px;
}
#app::-webkit-scrollbar-thumb {
	background: gray;
	border-radius: 5px;
}
.back-top {
	position: fixed;
	bottom: 50px;
	right: 50px;
	width: 40px;
	cursor: pointer;
}
.html img {
	max-width: 100%;
}
</style>
