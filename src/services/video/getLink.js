const axios = require('axios')
import { API_URL } from '../settings'
import { validateSuscription } from '../../js/Auth/validateSuscription'

export default function getLinkVideo(registro, token){
	const apiURL = `${API_URL}/cmd/getLinkLeon/${registro}/${token}`

	return axios.get(apiURL)
		.then(function (response) {
			const { data } = response
			return data			
		})
		.catch(function () {
			return Promise.reject('error')
		})
}