import React, { useEffect } from 'react'
import { Platform } from 'react-tv'
import { BaseRouter } from '../router/index'
// import { CookiesProvider } from 'react-cookie' 
// import { UserContextProvider } from '../context/UserContext'
// import SpatialNavigation from 'react-js-spatial-navigation'
require('spatial-navigation-js')
// require('../js/SpatialNavigation')
// import { withNavigation } from 'react-tv-navigation'
// import {initNavigation} from '@noriginmedia/react-spatial-navigation'
import '../styles/app.css'

console.log(Platform('webos'))
SpatialNavigation.init()
SpatialNavigation.add({
	selector: 'button, input'
})
SpatialNavigation.makeFocusable()
// initNavigation({debug: true, visualDebug: true})

export function App() {
	return (
		<div className="app-content">
			<BaseRouter />
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