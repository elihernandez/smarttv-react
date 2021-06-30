import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderApp } from '../hooks/useLoaderApp'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import { Router } from '../router/index'
import '../styles/app.css'
import './styles.css'

export function App() {
	console.log('App')
	// const isShowLoaderLogo = useSelector(state => state.loader.isShowLoaderLogo)
	// const isShowLoaderVideo = useSelector(state => state.loader.isShowLoaderVideo)
	const { isLoadedData } = useLoaderApp()
	
	return <div className="app-content">
		{isLoadedData &&
			<Router />
		}
		<LoaderVideo />
		<LoaderLogo />
	</div>    
}