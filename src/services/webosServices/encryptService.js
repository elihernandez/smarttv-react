import { Platform } from 'react-tv'
import { encryptString } from '../../js/Encrypt'

export const encryptService = (string, rounds) => {
	return new Promise(function(resolve, reject){
		if(Platform('webos')){
			//eslint-disable-next-line no-undef
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