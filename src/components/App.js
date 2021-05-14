import React, { useEffect, useContext, useState } from 'react'
import { Router } from '../router/index'
import TvDeviceContext from '../context/TvDeviceContext'
import { initSpatialNavigation } from '../js/SpatialNavigation'
import { getTVDeviceInformation } from '../services/getTvDeviceInformation'
import { getTVDeviceUUID } from '../services/getTvDeviceUUID'
import { useLocalstorage } from 'rooks'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import '../styles/app.css'
// initNavigation({debug: true, visualDebug: true})

export function App() {
	const [appLoading, setAppLoading] = useState(true)
	const { stateTvDevice, dispatchTvDevice } = useContext(TvDeviceContext)
	console.log(stateTvDevice)
	// const [deviceType, setDeviceType] = useLocalstorage('deviceType', 'stateTvDevice.deviceType')
	// const [deviceUUID, setDeviceUUID] = useLocalstorage('uuid', 'stateTvDevice.deviceUUID')

	useEffect(() => {

		// const loadInformation = async() => {
		// 	if(!localStorage.getItem('_deviceType')){
		// 		const deviceInfo = await getTVDeviceInformation()
		// 		localStorage.setItem('_deviceType', deviceInfo.modelName)
		// 		dispatchTvDevice({ type: 'setDeviceType', payload: deviceInfo.modelName })
		// 	}
			
		// 	if(!localStorage.getItem('_deviceType')){
		// 		const deviceUUID = await getTVDeviceUUID()
		// 		localStorage.setItem('_uuid', deviceUUID)
		// 		dispatchTvDevice({ type: 'setDeviceUUID', payload: deviceUUID })
		// 	}

		// 	setAppLoading(false)
		// }

		// initSpatialNavigation()
		// loadInformation()
	}, [])

	return (
		<div className="app-content">
			{appLoading ? (
				<LoaderVideo />
			):(
				<Router />
			)}
		</div>    
	)
}

// export const App = withNavigation(NavigableApp)

{/* <SpatialNavigation>
	<CookiesProvider>         
		<UserContextProvider>
			<BaseRouter/>
		</UserContextProvider>
	</CookiesProvider>
</SpatialNavigation> */}