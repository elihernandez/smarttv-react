import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../../../pages/Home'
import { MusicPage } from '../../../pages/Music'
import { TopMenu } from '../../../components/TopMenu'

export function RouterLogged() {
	return (
		<Fragment>
			<TopMenu />
			<Switch>
				<Route exact path="/inicio">
					<Home />
				</Route>

				<Route path="/musica">
					<MusicPage />
				</Route>

				<Route exact path="/">
					<Redirect to="/inicio" />
				</Route>
				<Route exact path="/info">
					<Redirect to="/inicio" />
				</Route>
				<Route exact path="/login">
					<Redirect to="/inicio" />
				</Route>
			</Switch>
		</Fragment>
	)
}