import { createSlice } from '@reduxjs/toolkit'

export const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		devicePlatform: 'SmartTv Emulator',
		deviceType: 'SmartTv Emulator',
		deviceUUID: '',
		deviceVersion: '',
	},
	reducers: {
		setDevicePlaftorm: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.devicePlatform = action.payload
		},
		setDeviceType: (state, action) => {
			state.deviceType = action.payload
		},
		setDeviceUUID: (state, action) => {
			state.deviceUUID = action.payload
		},
		setDeviceVersion: (state, action) => {
			state.deviceVersion = action.payload
		},
		setDeviceData: (state, action) => {
			state.devicePlatform = action.payload.devicePlatform
			state.deviceType = action.payload.deviceType
			state.deviceUUID = action.payload.deviceUUID
			state.deviceVersion = action.payload.deviceVersion
		}
	},
})

// Action creators are generated for each case reducer function
export const { setDevicePlaftorm, setDeviceType, setDeviceUUID, setDeviceVersion, setDeviceData } = deviceSlice.actions

export default deviceSlice.reducer