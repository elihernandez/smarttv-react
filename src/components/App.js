import React from 'react'
import { Platform } from 'react-tv'
import { BaseRouter } from '../router/index'
// import { CookiesProvider } from 'react-cookie' 
// import { UserContextProvider } from '../context/UserContext'
// import SpatialNavigation from 'react-js-spatial-navigation'
// require('spatial-navigation-js')
// require('../js/SpatialNavigation')
import '../styles/app.css'

console.log(Platform('webos'))

export default function App() {
	return (
		<div className="app-content">
			<BaseRouter />
		</div>    
	)
}

{/* <SpatialNavigation>
	<CookiesProvider>         
		<UserContextProvider>
			<BaseRouter/>
		</UserContextProvider>
	</CookiesProvider>
</SpatialNavigation> */}