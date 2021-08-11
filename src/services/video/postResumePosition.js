import { API_URL } from '../settings'
const axios = require('axios')

export default function postResumePosition(registro, positionVideo, token){
	const apiURL = `${API_URL}/cmd/sCmResPos/${registro}/${positionVideo}/${token}`

	return axios.get(apiURL)
		.then(function (response) {
			return response.data
		})
		.catch(function () {
			return ('error')
		})
}