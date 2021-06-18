/* eslint-disable no-undef */
import config from '../../config'

export const getTVDeviceUUID = () => {
	return new Promise(function(resolve, reject) {
		if (config.device === 'webos' &&  webOS.platform.tv === true) {
			webOSDev.LGUDID({
				onSuccess: function (res) {
					resolve(res)
				},
				onFailure: function (res) {
					reject(res)
				}
			})
		}
		
		resolve('Emulator')
	})
}