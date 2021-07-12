import { createSlice } from '@reduxjs/toolkit'

export const videoSlice = createSlice({
	name: 'video',
	initialState: {
		data: [],
		volume: 50,
		isMuted: false,
		isFullScreen: false
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
		setVolume: (state, action) => {
			state.volume = action.payload
		},
		setIsMuted: (state, action) => {
			state.isMuted = action.payload
		},
		setIsFullScreen: (state, action) => {
			state.isFullScreen = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setData, setVolume, setIsMuted, setIsFullScreen } = videoSlice.actions

export default videoSlice.reducer