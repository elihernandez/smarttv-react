// require('polyfill-library-node')
// require('./js/Pollyfill/includes')
const elem = document.getElementById('top-menu')
elem.parentNode.removeChild(elem)
require('./js/DynamicImports')
require('object-assign-polyfill')
require('./js/Pollyfill/includes')
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components/App'
import store from './redux/store'
import { Backdrop } from './components/Backdrop'

render(
	<Provider store={store}>
		<App/>
		<Backdrop />
	</Provider>
	,document.getElementById('app')
) 