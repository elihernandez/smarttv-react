import { createSlice } from '@reduxjs/toolkit'

export const videoSlice = createSlice({
	name: 'video',
	initialState: {
		data: [],
		videoRef: null,
		hls: null,
		playing: false,
		currentTime: 0
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
		setVideoRef: (state, action) => {
			state.videoRef = action.payload
		},
		setHls: (state, action) => {
			state.hls = action.payload
		},
		setPlaying: (state, action) => {
			state.playing = action.payload
		},
		setCurrentTime: (state, action) => {
			state.currentTime = action.payload
		}
	},
})

// Action creators are generated for each case reducer function
export const { setVideoRef, setHls, setPlaying, setCurrentTime } = videoSlice.actions

export default videoSlice.reducer