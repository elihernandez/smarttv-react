import { createSlice } from '@reduxjs/toolkit'

export const vodSlice = createSlice({
	name: 'vod',
	initialState: {
		data: [],
		movie: [],
		serie: [],
		season: [],
		isLoading: true,
		lastDateRequest: null,
		isError: false,
		typeError: null
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
		setMovie: (state, action) => {
			state.movie = action.payload
		},
		setPositionMovie: (state, action) => {
			state.movie.ResumePos = action.payload
		},
		setSerie: (state, action) => {
			state.serie = action.payload
		},
		setSeason: (state, action) => {
			state.season = action.payload
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setLastDateRequest: (state, action) => {
			state.lastDateRequest = action.payload
		},
		setError: (state, action) => {
			state.isError = action.payload.isError
			state.typeError = action.payload.typeError
		}
	},
})

// Action creators are generated for each case reducer function
export const { setData, updatePositionMovieData, setMovie, setSerie, setSeason, setLoading, setLastDateRequest } = vodSlice.actions

export default vodSlice.reducer