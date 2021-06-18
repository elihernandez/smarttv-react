require('../SpatialNavigation')
import config from '../../../config'
(async() => {
	if(config.device === 'webos'){
		await import('../WebOS/webOSTV')
		await import('../WebOS/webOSTV-dev')
	}
})()