import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'

const elem = document.getElementById('top-menu')
elem.parentNode.removeChild(elem)
ReactDOM.render(<App/>, document.getElementById('app')) 