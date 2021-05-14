import { useContext, useEffect } from 'react'
import TvDeviceContext from '../context/TvDeviceContext'
import { getTVDeviceInformation } from '../services/getTvDeviceInformation'

export const useDeviceInformation = () => {
	const { dispatchTvDevice } = useContext(TvDeviceContext)

	useEffect(() => {
		dispatchTvDevice({ type: 'setDeviceType', payload: getTVDeviceInformation()})
	}, [])
}