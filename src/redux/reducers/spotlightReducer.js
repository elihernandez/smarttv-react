import { createSlice } from '@reduxjs/toolkit'

export const spotlightSlice = createSlice({
	name: 'spotlight',
	initialState: {
		data: [],
		isLoading: false,
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setData, setLoading } = spotlightSlice.actions

export default spotlightSlice.reducer