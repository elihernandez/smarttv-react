/* eslint-disable no-undef */
import { Platform } from 'react-tv'

export const getTVDeviceUUID = () => {
	return new Promise(function(resolve, reject) {
		if(Platform('webos')){
			webOSDev.LGUDID({
				onSuccess: function (res) {
					resolve(res)
				},
				onFailure: function (res) {
					reject(res)
				}
			})
		}else{
			resolve('Emulator')
		}
	})
}