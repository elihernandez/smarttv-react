import { createSlice } from '@reduxjs/toolkit'

export const focusSlice = createSlice({
	name: 'focus',
	initialState: {
		buttonMenu: null,
	},
	reducers: {
		setButtonMenuFocus: (state, action) => {
			state.buttonMenu = action.payload
		}
	},
})

export const { setButtonMenuFocus } = focusSlice.actions

export default focusSlice.reducer