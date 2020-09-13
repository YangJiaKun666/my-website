import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	// 首页
	{
		path: '/',
		name: 'index',
		component: () => import('@/pages/home/index')
	},
	// 列表页
	{
		path: '/list',
		name: 'list',
		component: () => import('@/pages/list/index')
	},
	// 详情
	{
		path: '/detail',
		name: 'detail',
		component: () => import('@/pages/detail/index')
	},
	// 空白页
	{
		path: '/blank',
		name: 'blank',
		component: () => import('@/pages/blank/index')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
