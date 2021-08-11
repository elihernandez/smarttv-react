import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userLogged:  localStorage.getItem('_userLogged') || null,
		userToken: localStorage.getItem('_userToken') || null,
		suscriptionStatus: parseInt(localStorage.getItem('_suscriptionStatus')) || null
	},
	reducers: {
		setUserLogged: (state, action) => {
			state.userLogged = action.payload
		},
		setUserToken: (state, action) => {
			state.userToken = action.payload
		},
		setSuscriptionStatus: (state, action) => {
			state.suscriptionStatus = action.payload
		},
		setUserData: (state, action) => {
			state.userLogged = action.payload.userLogged
			state.userToken = action.payload.userToken
			state.suscriptionStatus = action.payload.suscriptionStatus
		}
	},
})

export const { setUserLogged, setUserToken, setSuscriptionStatus, setUserData } = userSlice.actions

export default userSlice.reducer