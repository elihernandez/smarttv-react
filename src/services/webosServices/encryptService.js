/* eslint-disable no-undef */
import { encryptString } from '../../js/Encrypt'

export const encryptService = (string, rounds) => {
	return new Promise(function(resolve, reject){
		if (webOS.platform.tv === true) {
			webOS.service.request(
				'luna://com.guiahtv.smarttv.encryptpasswordservice/',
				{
					method: 'encryptPassword',
					parameters: {
						string: string,
						rounds: rounds
					},
					onFailure: function () {
						reject(new Error('Error al encriptar password'))
					},
					onComplete: function (inResponse) {
						resolve(inResponse.hashString)
					},
				}
			)
			console.log('Hola')
		}else{
			resolve(encryptString(string, 10))
		}
	})
}