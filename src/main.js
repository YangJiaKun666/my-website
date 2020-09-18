import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const userAgentInfo = navigator.userAgent.toLocaleLowerCase()
if (userAgentInfo.indexOf('mobile')) {
	window.location.href = 'http://yjk-dev.com:8302/'
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
