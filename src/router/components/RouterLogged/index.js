import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../../../pages/Home'

export function RouterLogged() {
	return (
		<Switch>
			<Route exact path="/">
				<Home/>
			</Route>
			<Route exact path="/info">
				<Redirect to="/" />
			</Route>
			<Route exact path="/login">
				<Redirect to="/" />
			</Route>
		</Switch>
	)
}