/* eslint-disable no-undef */
import config from '../../../config'

export default function getPlatform() {
	if (config.device === 'webos' && webOS.platform.tv === true) {
		return('LG Smart TV')
	}

	// if(Platform('tizen')){
	// 	resolve('Samsung Smart TV')
	// }

	return('Smart Tv Browser')
}