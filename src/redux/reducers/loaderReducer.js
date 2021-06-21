import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
	name: 'loader',
	initialState: {
		isShowLoaderSpinner: false,
		isShowLoaderLogo: false,
		isShowLoaderVideo: false
	},
	reducers: {
		setLoaderSpinner: (state, action) => {
			state.isShowLoaderSpinner = action.payload
		},
		setLoaderLogo: (state, action) => {
			state.isShowLoaderLogo = action.payload
		},
		setLoaderVideo: (state, action) => {
			state.isShowLoaderVideo = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLoaderSpinner, setLoaderLogo, setLoaderVideo } = loaderSlice.actions

export default loaderSlice.reducer