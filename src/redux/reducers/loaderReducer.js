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
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
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