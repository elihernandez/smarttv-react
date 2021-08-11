import { createSlice } from '@reduxjs/toolkit'
import getInformation from '../../services/device/getInformation'
import getPlatform from '../../services/device/getPlatform'
import getUUID from '../../services/device/getUUID'

export const deviceSlice = createSlice({
	name: 'device',
	initialState: {
		devicePlatform: getPlatform(),
		deviceType: getInformation().modelName,
		deviceUUID: getUUID(),
		deviceVersion: getInformation().version
	},
	reducers: {
		setDevicePlaftorm: (state, action) => {
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

export const { setDevicePlaftorm, setDeviceType, setDeviceUUID, setDeviceVersion, setDeviceData } = deviceSlice.actions

export default deviceSlice.reducer