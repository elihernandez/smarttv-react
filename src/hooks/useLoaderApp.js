import { useState, useEffect, useContext } from 'react'
import { addToDate, getNowDateTime, isSameOrBeforeDate } from '../js/Time'
import TvDeviceContext from '../context/TvDeviceContext'

export const useLoaderApp = () => {
	const [loaderVideo, setLoaderVideo] = useState(false)
	const [loaderLogo, setLoaderLogo] = useState(false)
	const [loadedLoader, setLoadedLoader] = useState(false)
	const { stateTvDevice } = useContext(TvDeviceContext)

	useEffect(() => {
		// localStorage.removeItem('_deviceLoader')
		const localLoaderVideo = localStorage.getItem('_deviceLoader')
		if(localLoaderVideo){
			setLoaderLogo(true)

			if(!isSameOrBeforeDate(localLoaderVideo)){
				localStorage.removeItem('_deviceLoader')
			}
		}else{
			setLoaderVideo(true)
			localStorage.setItem('_deviceLoader', addToDate(getNowDateTime(), 31, 'day'))
		}
	}, [])

	
	useEffect(() => {
		const onEndedLoaderVideo = () => {
			document.getElementById('loader-video').removeEventListener('ended', onEndedLoaderVideo)
			setLoadedLoader(true)
		}
		
		if(stateTvDevice?.devicePlatform && stateTvDevice?.deviceType && stateTvDevice?.deviceUUID && stateTvDevice?.deviceVersion){
			if(loaderVideo){
				document.getElementById('loader-video').addEventListener('ended', onEndedLoaderVideo)
			}else{
				setTimeout(() => {
					setLoadedLoader(true)
				}, 1000)
			}
		}
	}, [stateTvDevice])

	return { loaderVideo, loaderLogo, loadedLoader }
}