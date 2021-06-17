// require('polyfill-library-node')
require('./js/Pollyfill/includes')
require('./js/WebOS/webOSTV')
require('./js/WebOS/webOSTV-dev')
require('./js/SpatialNavigation')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components/App'
import store from './redux/store'
import { Backdrop } from './components/Backdrop'

const elem = document.getElementById('top-menu')
elem.parentNode.removeChild(elem)

ReactDOM.render(
	<Provider store={store}>
		<App/>
		<Backdrop />
	</Provider>
	,document.getElementById('app')
) 