import config from '../../config'
import { getUtcOffsetLocal } from '../js/Time'

export function getURL(section, userToken, params = {}) {
	const listEndpoints = {
		'spotlight': `${config.API_URL}/sl/leon/home_spotlight`,
		'buttons-menu': `${config.API_URL}/cs/leon_home_bm`,
		'catalogue-tv': `${config.API_URL}/cmdata/leon/livetvplus/${userToken}/${getUtcOffsetLocal()}`,
		'catalogue-vod': `${config.API_URL}/cmdata/leon/entplus/${userToken}`,
		'radio': `${config.API_URL}/cdata/leon/radio/${userToken}`,
		'catalogue-zonakids': `${config.API_URL}/cdata/leon/kids/${userToken}`,
		'link-vod': `${config.API_URL}/cmd/getLinkLeon/${params.registro}/${userToken}`,
		'link-video': `${config.API_URL}/cmd/getLinkLeon/${params.registro}/${userToken}`,
		'music-myplaylists': `https://api.guiah.tv/get/myplaylist/${userToken}/${params.profileID}`,
		'music-home': `https://api.guiah.tv/music/home/${userToken}/1`,
		'music-artist': `https://api.guiah.tv/get/artist/${params.artistID}`,
		'music-album': `https://api.guiah.tv/get/album/${params.albumID}`,
		'music-playlist': `https://api.guiah.tv/get/playlist/${params.playlistID}`,
		'track-link': `https://api.guiah.tv/get/trackLink/${params.trackId}/${userToken}`
	}

	return listEndpoints[section]
}