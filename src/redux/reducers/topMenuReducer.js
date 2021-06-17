import { createSlice } from '@reduxjs/toolkit'

export const topMenuSlice = createSlice({
	name: 'topMenu',
	initialState: {
		isShowTopMenu: true,
		isShowNavbar: true,
		linkActive: 'link-home'
	},
	reducers: {
		setShowTopMenu: (state, action) => {
			state.isShowTopMenu = action.payload
		},
		setShowNavbar: (state, action) => {
			state.isShowNavbar = action.payload
		},
		setLinkActive: (state, action) => {
			state.linkActive = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setShowTopMenu, setShowNavbar, setLinkActive } = topMenuSlice.actions

export default topMenuSlice.reducer