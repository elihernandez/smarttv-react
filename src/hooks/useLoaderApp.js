import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoaderLogo, setLoaderVideo } from '../redux/reducers/loaderReducer'
import { setUserData } from '../redux/reducers/userReducer'
import { setDeviceData } from '../redux/reducers/deviceReducer'
// import { getTVDeviceInformation } from '../services/device/getInformation'
// import { getTvDevicePlatform } from '../services/getTvDevicePlatform'
// import { getTVDeviceUUID } from '../services/getTvDeviceUUID'
// import { addToDate, getNowDateTime, isSameOrBeforeDate } from '../js/Time'

export const useLoaderApp = () => {
	const dispatch = useDispatch()
	const [isLoadedData, setIsLoadedData] = useState(false)
	const loaderState = useSelector(state => state.loader)

	// useEffect(() => {
	// 	// localStorage.removeItem('_deviceLoader')
	// 	const localLoaderVideo = localStorage.getItem('_deviceLoader')
	// 	if(localLoaderVideo){
	// 		dispatch(setLoaderLogo(true))
			
	// 		if(!isSameOrBeforeDate(localLoaderVideo)){
	// 			localStorage.removeItem('_deviceLoader')
	// 		}
	// 	}else{
	// 		dispatch(setLoaderVideo(true))
	// 		const date = addToDate(getNowDateTime(), 31, 'day')
	// 		localStorage.setItem('_deviceLoader', date)
	// 	}
	// }, [])

	// useEffect(() => {
	// 	const loadInformation = async() => {
	// 		const devicePlatform = await getTvDevicePlatform()
	// 		const deviceInfo = await getTVDeviceInformation()
	// 		const deviceUUID = await getTVDeviceUUID()

	// 		const localDevicePlatform = localStorage.getItem('_devicePlatform')
	// 		if(!localDevicePlatform){
	// 			localStorage.setItem('_devicePlatform', devicePlatform)
	// 		}

	// 		const localDeviceType = localStorage.getItem('_deviceType')
	// 		if(!localDeviceType){
	// 			localStorage.setItem('_deviceType', deviceInfo.modelName)
	// 		}
			
	// 		const localDeviceUUID = localStorage.getItem('_deviceUUID')
	// 		if(!localDeviceUUID){
	// 			localStorage.setItem('_deviceUUID', deviceUUID)
	// 		}

	// 		const localDeviceVersion = localStorage.getItem('_deviceVersion')
	// 		if(!localDeviceVersion){
	// 			localStorage.setItem('_deviceVersion', deviceInfo.version)
	// 		}

	// 		dispatch(setDeviceData({
	// 			devicePlatform: localDevicePlatform ? localDevicePlatform : devicePlatform,
	// 			deviceType: localDeviceType ? localDeviceType : deviceInfo.modelName,
	// 			deviceUUID: localDeviceUUID ? localDeviceUUID : deviceUUID,
	// 			deviceVersion: localDeviceVersion ? localDeviceVersion : deviceInfo.version
	// 		}))

	// 		setTimeout(() => {
	// 			setIsLoadedData(true)
	// 		}, 1500)
	// 	}

	// 	loadInformation()
	// }, [])
	
	useEffect(() => {
		const onEndedLoaderVideo = () => {
			document.getElementById('loader-video').removeEventListener('ended', onEndedLoaderVideo)
			dispatch(setLoaderVideo(false))
		}

		if(isLoadedData){
			if(loaderState.isShowLoaderVideo){
				document.getElementById('loader-video').addEventListener('ended', onEndedLoaderVideo)
			}else{
				setTimeout(() => {
					dispatch(setLoaderLogo(false))
				}, 1000)
			}
		}

		return () => {
			if(document.getElementById('loader-video') && isLoadedData){
				document.getElementById('loader-video').removeEventListener('ended', onEndedLoaderVideo)
			}
		}
	}, [isLoadedData, loaderState])

	return { isLoadedData }
}