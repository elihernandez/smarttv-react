const axios = require('axios')
import { API_URL } from '../settings'
import { validateSuscription } from '../../js/Auth/validateSuscription'

export default function getLinkVideo(registro, token){
	const apiURL = `${API_URL}/cmd/getLinkLeon/${registro}/${token}`

	return axios.get(apiURL)
		.then(function (response) {
			const { data } = response
			if(validateSuscription(data.StatusCode)){
				return data
			}else{
				return Promise.reject('error')
			}
			
		})
		.catch(function () {
			return Promise.reject('error')
		})
}