import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderApp } from '../hooks/useLoaderApp'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import { Router } from '../router/index'
import '../styles/app.css'
import './styles.css'

export function App() {
	console.log('App')
	const { isLoadedData } = useLoaderApp()
	const isShowLoaderLogo = useSelector(state => state.loader.isShowLoaderLogo)
	const isShowLoaderVideo = useSelector(state => state.loader.isShowLoaderVideo)

	return <div className="app-content">
		{isShowLoaderVideo &&
			<LoaderVideo />
		}
		{isShowLoaderLogo &&
			<LoaderLogo />
		}
		{isLoadedData &&
			<Router />
		}
	</div>    
}