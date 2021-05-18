import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import TvDeviceContext from '../context/TvDeviceContext'
import { getTVDeviceInformation } from '../services/getTvDeviceInformation'
import { getTvDevicePlatform } from '../services/getTvDevicePlatform'
import { getTVDeviceUUID } from '../services/getTvDeviceUUID'

export const useDeviceInfo = () => {
	const { dispatchTvDevice } = useContext(TvDeviceContext)
	const { dispatchUser } = useContext(UserContext)

	useEffect(() => {
		const loadInformation = async() => {
			const devicePlatform = await getTvDevicePlatform()
			const deviceInfo = await getTVDeviceInformation()
			const deviceUUID = await getTVDeviceUUID()
			
			const localUserLogged = localStorage.getItem('_userLogged')
			if(localUserLogged){
				dispatchUser({ type: 'setUserLogged', payload: localUserLogged })
			}

			const localUserToken = localStorage.getItem('_userToken')
			if(localUserToken){
				dispatchUser({ type: 'setUserToken', payload: localUserToken })
			}

			const localSuscriptionStatus = localStorage.getItem('_suscriptionStatus')
			if(localSuscriptionStatus){
				dispatchUser({ type: 'setSuscriptionStatus', payload: localSuscriptionStatus })
			}

			const localDevicePlatform = localStorage.getItem('_devicePlatform')
			if(!localDevicePlatform){
				localStorage.setItem('_devicePlatform', devicePlatform)
				dispatchTvDevice({ type: 'setDevicePlatform', payload: devicePlatform })
			}else{
				dispatchTvDevice({ type: 'setDevicePlatform', payload: localDevicePlatform })
			}

			const localDeviceType = localStorage.getItem('_deviceType')
			if(!localDeviceType){
				localStorage.setItem('_deviceType', deviceInfo.modelName)
				dispatchTvDevice({ type: 'setDeviceType', payload: deviceInfo.modelName })
			}else{
				dispatchTvDevice({ type: 'setDeviceType', payload: localDeviceType })
			}
			
			const localDeviceUUID = localStorage.getItem('_deviceUUID')
			if(!localDeviceUUID){
				localStorage.setItem('_deviceUUID', deviceUUID)
				dispatchTvDevice({ type: 'setDeviceUUID', payload: deviceUUID })
			}else{
				dispatchTvDevice({ type: 'setDeviceUUID', payload: localDeviceUUID })
			}

			const localDeviceVersion = localStorage.getItem('_deviceVersion')
			if(!localDeviceVersion){
				localStorage.setItem('_deviceVersion', deviceInfo.version)
				dispatchTvDevice({ type: 'setDeviceVersion', payload: deviceInfo.version })
			}else{
				dispatchTvDevice({ type: 'setDeviceVersion', payload: localDeviceVersion })
			}
		}

		loadInformation()
	}, [])
}