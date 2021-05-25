const bcrypt = require('bcryptjs')
const Service = require('webos-service')
const service = new Service('com.guiahtv.smarttv.encryptpasswordservice')

service.register('encryptPassword', function(message) {
	bcrypt.genSalt(message.payload.rounds, function(_err, salt) {
		bcrypt.hash(message.payload.string, salt, function(_err, hash) {
			message.respond({
				hashString: hash
			})
		})
	})
})