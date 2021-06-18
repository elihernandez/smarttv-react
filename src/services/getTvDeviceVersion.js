/* eslint-disable no-undef */
import config from '../../config'

export const getTVDeviceInformation = () => {
	return new Promise(function(resolve) {
		if (config.device === 'webos' && webOS.platform.tv === true) {
			webOS.deviceInfo(function(info){
				resolve(info)
			})
		}
			
		resolve({ modelName: 'Emulator' })
	})
}