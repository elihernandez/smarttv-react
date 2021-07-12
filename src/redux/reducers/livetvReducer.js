import { createSlice } from '@reduxjs/toolkit'

export const livetvSlice = createSlice({
	name: 'livetv',
	initialState: {
		data: [],
		isLoading: false,
		url: null,
		currentPage: null,
		currentCategory: null,
		isGuideOnce: false,
		isChannelActive: false
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload
		},
		setGuideOnce: (state, action) => {
			state.isGuideOnce = action.payload
		},
		setURL: (state, action) => {
			state.url = action.payload
		},
		setChannelActive: (state, action) => {
			state.isChannelActive = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setData, setLoading, setCurrentPage, setCurrentCategory, setGuideOnce, setURL, setChannelActive } = livetvSlice.actions

export default livetvSlice.reducer