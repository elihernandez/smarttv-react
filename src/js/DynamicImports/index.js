require('../SpatialNavigation')
require('../Pollyfill/includes')
require('object-assign-polyfill')
import config from '../../../config'
(async() => {
	if(config.device === 'webos'){
		await import('../WebOS/webOSTV')
		await import('../WebOS/webOSTV-dev')
	}
})()