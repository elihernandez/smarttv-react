import { configureStore } from '@reduxjs/toolkit'
import deviceReducer from './reducers/deviceReducer'
import userReducer from './reducers/userReducer'
import loaderReducer from './reducers/loaderReducer'
import backdropReducer from './reducers/backdropReducer'
import topMenuReducer from './reducers/topMenuReducer'
import vodReducer from './reducers/vodReducer'

export default configureStore({
	reducer: {
		backdrop: backdropReducer,
		loader: loaderReducer,
		device: deviceReducer,
		user: userReducer,
		topMenu: topMenuReducer,
		vod: vodReducer,
	},
})