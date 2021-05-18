import {API_URL} from './settings'
const axios = require('axios')

export function getLogin(username, password, stateDevice){
	const apiURL = `${API_URL}/cmd/logusr/${username}/${password}`

	const data = {
		DevicePlatform: stateDevice.devicePlatform,
		DeviceType: stateDevice.deviceType,
		DeviceUUID: stateDevice.deviceUUID,
		DeviceVersion: stateDevice.deviceVersion
	}

	return axios.get(apiURL, {
		params: data
	}).then(function (response) {
		return response.data
	}).catch(function (error) {
		return error
	})
}