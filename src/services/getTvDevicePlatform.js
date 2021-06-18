/* eslint-disable no-undef */
export const getTvDevicePlatform = () => {
	return new Promise(function(resolve) {
		if (webOS.platform.tv === true) {
			resolve('LG Smart TV')
		}

		// if(Platform('tizen')){
		// 	resolve('Samsung Smart TV')
		// }

		resolve('Smart Tv Browser')
	})
}