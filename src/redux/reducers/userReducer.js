import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userLogged: null,
		userToken: null,
		suscriptionStatus: null
	},
	reducers: {
		setUserLogged: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
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

// Action creators are generated for each case reducer function
export const { setUserLogged, setUserToken, setSuscriptionStatus, setUserData } = userSlice.actions

export default userSlice.reducer