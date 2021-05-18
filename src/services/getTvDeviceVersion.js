/* eslint-disable no-undef */
import { Platform } from 'react-tv'

export const getTVDeviceInformation = () => {
	return new Promise(function(resolve) {
		if(Platform('webos')){
			webOS.deviceInfo(function(info){
				resolve(info)
			})
		}
			
		resolve({ modelName: 'Emulator' })
	})
}