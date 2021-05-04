const bcrypt = require('bcryptjs')

export function encryptString(str, numSalts){
	return new Promise(function(resolve, reject) {
		bcrypt.genSalt(numSalts, function(err, salt) {
			if(!err){
				bcrypt.hash(str, salt, function(err, hash) {
					if(!err){
						resolve(hash)
					}else{
						let error = new Error('Error en hash encrypt')
						reject(error)
					}
				})
			}else{
				let error = new Error('Error en salt encrypt')
				reject(error)
			}
		})
	})
}