import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 30000

axios.interceptors.request.use(
	config => {
		NProgress.start()
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		NProgress.done()
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

export const get = function(url, data, headers) {
	return new Promise(resolve => {
		axios({
			method: 'GET',
			url: url,
			params: data || {},
			headers: headers || {}
		}).then(res => {
			resolve(res.data)
		})
	})
}
