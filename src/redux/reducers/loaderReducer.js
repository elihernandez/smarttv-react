import { createSlice } from '@reduxjs/toolkit'
import { addToDate, getNowDateTime, isSameOrBeforeDate } from '../../js/Time'

const getLoaderLogo = () => {
	const localLoaderVideo = localStorage.getItem('_deviceLoader')
	if(localLoaderVideo){
		if(!isSameOrBeforeDate(localLoaderVideo)){
			localStorage.removeItem('_deviceLoader')
		}

		return true
	}

	return false
}

const getLoaderVideo = () => {
	const localLoaderVideo = localStorage.getItem('_deviceLoader')
	if(!localLoaderVideo){
		const date = addToDate(getNowDateTime(), 31, 'day')
		localStorage.setItem('_deviceLoader', date)

		return true
	}

	return false
}

export const loaderSlice = createSlice({
	name: 'loader',
	initialState: {
		isShowLoaderSpinner: false,
		isShowLoaderLogo: getLoaderLogo(),
		isShowLoaderVideo: getLoaderVideo()                          
	},
	reducers: {
		setLoaderSpinner: (state, action) => {
			state.isShowLoaderSpinner = action.payload
		},
		setLoaderLogo: (state, action) => {
			state.isShowLoaderLogo = action.payload
		},
		setLoaderVideo: (state, action) => {
			state.isShowLoaderVideo = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLoaderSpinner, setLoaderLogo, setLoaderVideo } = loaderSlice.actions

export default loaderSlice.reducer