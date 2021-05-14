import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TvDeviceContextProvider } from './context/TvDeviceContext'
import { App } from './components/App'
require('./js/WebOS/webOSTV')
require('./js/WebOS/webOSTV-dev')
require('./js/SpatialNavigation')

const elem = document.getElementById('top-menu')
elem.parentNode.removeChild(elem)

ReactDOM.render(
	<TvDeviceContextProvider>
		<App/>
	</TvDeviceContextProvider>
	,document.getElementById('app')
) 