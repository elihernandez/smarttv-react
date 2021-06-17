import { createSlice } from '@reduxjs/toolkit'

export const backdropSlice = createSlice({
	name: 'backdrop',
	initialState: {
		isShowBackdrop: false,
		isShowLoading: false,
		isShowErrorMessage: false,
		errorMessage: ''
	},
	reducers: {
		setShowBackdrop: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.isShowBackdrop = action.payload
		},
		setShowLoading: (state, action) => {
			state.isShowLoading = action.payload
		},
		setShowErrorMessage: (state, action) => {
			state.isShowErrorMessage = action.payload
		},
		setErrorMessage: (state, action) => {
			state.errorMessage = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setShowBackdrop, setShowLoading, setShowErrorMessage, setErrorMessage } = backdropSlice.actions

export default backdropSlice.reducer