import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TvDeviceContextProvider } from './context/TvDeviceContext'
import { UserContextProvider } from './context/UserContext'
import { GlobalContextProvider } from './context/GlobalContext'
import { App } from './components/App'
import { Backdrop } from './components/Backdrop'
require('polyfill-library-node')
require('./js/WebOS/webOSTV')
require('./js/WebOS/webOSTV-dev')
require('./js/SpatialNavigation')

const elem = document.getElementById('top-menu')
elem.parentNode.removeChild(elem)

ReactDOM.render(
	<TvDeviceContextProvider>
		<GlobalContextProvider>
			<UserContextProvider>
				<App/>
				<Backdrop />
			</UserContextProvider>
		</GlobalContextProvider>
	</TvDeviceContextProvider>
	,document.getElementById('app')
) 