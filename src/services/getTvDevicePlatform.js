/* eslint-disable no-undef */
import config from '../../config'

export const getTvDevicePlatform = () => {
	return new Promise(function(resolve) {
		if (config.device === 'webos' && webOS.platform.tv === true) {
			resolve('LG Smart TV')
		}

		// if(Platform('tizen')){
		// 	resolve('Samsung Smart TV')
		// }

		resolve('Smart Tv Browser')
	})
}