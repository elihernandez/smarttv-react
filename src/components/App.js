import React, { Fragment, useEffect, useState } from 'react'
import { useLoaderApp } from '../hooks/useLoaderApp'
import { useDeviceInfo } from '../hooks/useDeviceInfo'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import { Router } from '../router/index'
import '../styles/app.css'

export function App() {
	const [ appIsReady, setAppIsReady ] = useState(false)
	const { loaderVideo, loaderLogo, loadedLoader } = useLoaderApp()
	useDeviceInfo()

	useEffect(() => {
		if(loadedLoader){
			setAppIsReady(true)
		}
	}, [loadedLoader])

	if(!appIsReady){
		return (
			<Fragment>
				{loaderVideo && (
					<LoaderVideo />
				)}
				{loaderLogo && (
					<LoaderLogo />
				)}
			</Fragment>
		)
	}

	if(appIsReady){
		return (
			<div className="app-content">
				<Router />
			</div>    
		)
	}
}