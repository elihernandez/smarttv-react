/* eslint-disable no-undef */
export const getTVDeviceInformation = () => {
	return new Promise(function(resolve) {
		if (webOS.platform.tv === true) {
			webOS.deviceInfo(function(info){
				resolve(info)
			})
		}
			
		resolve({ modelName: 'Emulator', version: 'Emulator' })
	})
}