import React from 'react'
import { LoaderLogo, LoaderVideo } from '../components/Loader'
import { Router } from '../router/index'
import '../styles/app.css'
import './styles.css'

export function App() {
	console.log('App')
	
	return <div className="app-content">
		<Router />
		<LoaderVideo />
		<LoaderLogo />
	</div>
}