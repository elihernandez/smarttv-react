import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../../../pages/Home'
import { TopMenu } from '../../../components/TopMenu'

export function RouterLogged() {

	return (
		<Fragment>
			<TopMenu />
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
		</Fragment>
	)
}