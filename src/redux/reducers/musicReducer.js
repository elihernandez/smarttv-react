import { createSlice } from '@reduxjs/toolkit'

export const musicSlice = createSlice({
	name: 'music',
	initialState: {
		isLoading: false,
		data: [],
		track: [],
		collection: [],
		artist:[],
		album:[],
		playlist:[],
		myPlaylists: [],
		currentPlaylist: [],
		listRandomTracks: [],
		isSidebarOpen: false,
		sidebarLinkActive: 'link-music-home'
	},
	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setData: (state, action) => {
			state.data = action.payload
		},
		setMyPlaylists: (state, action) => {
			state.myPlaylists = action.payload
		},
		setSidebarOpen: (state, action) => {
			state.isSidebarOpen = action.payload
		},
		setSidebarLinkActive: (state, action) => {
			state.sidebarLinkActive = action.payload
		}
	},
})

// Action creators are generated for each case reducer function
export const { setLoading, setData, setMyPlaylists, setSidebarOpen, setSidebarLinkActive } = musicSlice.actions

export default musicSlice.reducer