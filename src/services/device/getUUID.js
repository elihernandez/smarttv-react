/* eslint-disable no-undef */
import config from '../../../config'

export default function getUUID() {
	if (config.device === 'webos' &&  webOS.platform.tv === true) {
		webOSDev.LGUDID({
			onSuccess: function (res) {
				return(res)
			},
			onFailure: function (res) {
				return(res)
			}
		})
	}
		
	return('Emulator')
}