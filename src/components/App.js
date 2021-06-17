import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderApp } from '../hooks/useLoaderApp'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import { Router } from '../router/index'
import '../styles/app.css'
import './styles.css'

export function App() {
	console.log('App')
	const loaderState = useSelector(state => state.loader)
	const { isShowLoaderVideo, isShowLoaderLogo } = loaderState
	const { isLoadedData } = useLoaderApp()

	return <div className="app-content">
		<LoaderVideo isShow={isShowLoaderVideo} />
		<LoaderLogo isShow={isShowLoaderLogo} />
		{isLoadedData && (
			<Router />
		)}
	</div>    
}