/* eslint-disable no-undef */
import config from '../../../config'

export default function getInformation(){
	if (config.device === 'webos' && webOS.platform.tv === true) {
		webOS.deviceInfo(function(info){
			return info
		})
	}
			
	return ({ modelName: 'Emulator', version: 'Emulator' })
}