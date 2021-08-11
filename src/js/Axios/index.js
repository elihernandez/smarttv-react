// Suscription status del API
// 0 Suscripción expirada
// 1 Suscripción válida
// 2 Suscripción periodo de gracia
// 3 Suscripción gratuita
// 4 Sesión no válida

import axios from 'axios'
import { isEmptyArray } from '../Array'

const instance = axios.create({
	timeout: 10000
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
		let suscriptionStatus

		if(response.status === 200){
			// Error del API
			if(response?.length || response.data.length === 0 || isEmptyArray(response.data)){
				throw new Error(0)
			}else{
				// Suscription status del API
				if(response?.SuscriptionStatus){
					suscriptionStatus = response?.SuscriptionStatus
				}else if(response[0]?.SuscriptionStatus){
					suscriptionStatus = response[0]?.SuscriptionStatus
				}else{
					suscriptionStatus = 1
				}
			}
		}

		// Errores del cliente
		if(response.status >= 400 && response.status <= 499){
			throw new Error(2)
		}

		// Errores del servidor
		if(response.status >= 500 && response.status <= 599){
			throw new Error(3)
		}

		const { data } = response

		return {data, suscriptionStatus}
	}, 
	function (e) {
		const { code, message } = e
		
		// Errores de red
		if(code === 'ECONNABORTED'){
			if(message === 'Network Error'){
				throw new Error(4)
			}

			if(message === 'Request aborted'){
				throw new Error(5)
			}

			if(message.includes('timeout')){
				throw new Error(6)
			}
		}

		return Promise.reject(e)
	}
)

export default instance