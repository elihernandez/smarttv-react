import axios from 'axios'
import { isEmptyArray } from '../Array'

const instance = axios.create({
	// baseURL: config.API_URL,
	timeout: 20000
})

instance.interceptors.request.use(
	function (config) {
    	return config
	}, 
	function (error) {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	function (response) {
		if(response.status === 200){
			if(isEmptyArray(response.data)){
				throw new Error()
			}

			return response.data
		}else if(response.status >= 400 && response.status <= 499){
			throw new Error(response.status)
		}else if(response.status >= 500 && response.status <= 599){
			throw new Error(response.status)
		}
	}, 
	function (e) {
		console.log(e.code)
		// switch(e.code){
		// case 'ECONNABORTED':
		// 	throw new Error('Error de conexión')
		// default: 
		// 	break
		// }
		return Promise.reject(e)
	}
)

export default instance