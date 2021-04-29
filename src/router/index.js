import React from 'react'
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Info } from '../pages/Info'
// import { isBrowser, isMobile } from 'react-device-detect'
// import { devBasenameRouter, prodBasenameRouter } from '../../config'
// const basename = process.env.NODE_ENV !== 'production' ? 'guiahTV-SmartTV/webOS/' : ''

export function BaseRouter() {

	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<h1>Home</h1>
					<NavLink to='/login'>
						<button style={{ color: 'white' }}>Ir a Login</button>
					</NavLink>
					<NavLink to='/info'>
						<button style={{ color: 'white' }}>Ir a Info</button>
					</NavLink>
				</Route>
				<Route path="/login">
					<h1>Login</h1>
					<NavLink to='/'>
						<button style={{ color: 'white' }}>Ir a Home</button>
					</NavLink>
					<NavLink to='/info'>
						<button style={{ color: 'white' }}>Ir a Info</button>
					</NavLink>
				</Route>
				<Route path="/info">
					<Info/>
				</Route>
			</Switch>
		</HashRouter>
	)
}