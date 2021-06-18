/* eslint-disable no-undef */
export const getTVDeviceUUID = () => {
	return new Promise(function(resolve, reject) {
		if (webOS.platform.tv === true) {
			webOSDev.LGUDID({
				onSuccess: function (res) {
					resolve(res)
				},
				onFailure: function (res) {
					reject(res)
				}
			})
		}
		
		resolve('Emulator')
	})
}