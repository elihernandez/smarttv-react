import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Info } from '../../../pages/Info'

export function RouterLoggedOut() {
	return (
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
	)
}