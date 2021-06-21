import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loaderReducer'
import deviceReducer from './reducers/deviceReducer'
import userReducer from './reducers/userReducer'
import backdropReducer from './reducers/backdropReducer'
import topMenuReducer from './reducers/topMenuReducer'
import vodReducer from './reducers/vodReducer'
import musicReducer from './reducers/musicReducer'

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
	ignoredPaths: [
		loaderReducer,
		deviceReducer,
		userReducer,
		backdropReducer,
		topMenuReducer,
		vodReducer,
		musicReducer
	],
})

export default configureStore({
	reducer: {
		backdrop: backdropReducer,
		loader: loaderReducer,
		device: deviceReducer,
		user: userReducer,
		topMenu: topMenuReducer,
		vod: vodReducer,
		music: musicReducer,
	},
	middleware: [immutableInvariantMiddleware],
})