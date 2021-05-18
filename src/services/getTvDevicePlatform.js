/* eslint-disable no-undef */
import { Platform } from 'react-tv'

export const getTvDevicePlatform = () => {
	return new Promise(function(resolve) {
		if(Platform('webos')){
			resolve('LG Smart TV')
		}

		if(Platform('tizen')){
			resolve('Samsung Smart TV')
		}

		resolve('Smart Tv Browser')
	})
}