import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Info } from '../pages/Info'
// import { isBrowser, isMobile } from 'react-device-detect'
// import { devBasenameRouter, prodBasenameRouter } from '../../config'
// const basename = process.env.NODE_ENV !== 'production' ? 'guiahTV-SmartTV/webOS/' : ''

export function Router() {

	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/info" />
				</Route>
				<Route exact path="/info">
					<Info/>
				</Route>
				<Route exact path="/login">
					<Info/>
				</Route>
			</Switch>
		</HashRouter>
	)
}