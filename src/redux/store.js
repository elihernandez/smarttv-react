import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loaderReducer'
import deviceReducer from './reducers/deviceReducer'
import userReducer from './reducers/userReducer'
import backdropReducer from './reducers/backdropReducer'
import spotlightReducer from './reducers/spotlightReducer'
import topMenuReducer from './reducers/topMenuReducer'
import livetvReducer from './reducers/livetvReducer'
import vodReducer from './reducers/vodReducer'
import musicReducer from './reducers/musicReducer'
import videoReducer from './reducers/videoReducer'

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
	ignoredPaths: [
		loaderReducer,
		deviceReducer,
		userReducer,
		spotlightReducer,
		backdropReducer,
		topMenuReducer,
		livetvReducer,
		vodReducer,
		musicReducer,
		videoReducer
	],
})

export default configureStore({
	reducer: {
		backdrop: backdropReducer,
		loader: loaderReducer,
		device: deviceReducer,
		spotlight: spotlightReducer,
		user: userReducer,
		topMenu: topMenuReducer,
		livetv: livetvReducer,
		vod: vodReducer,
		music: musicReducer,
		video: videoReducer
	},
	middleware: [immutableInvariantMiddleware],
})