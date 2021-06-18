import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import {  TopMenu } from '../../../components/TopMenu'
import { Home } from '../../../pages/Home'
import { VodPage } from '../../../pages/Vod'
import { MusicPage } from '../../../pages/Music'
// import { LiveTvPage } from '../../../pages/LiveTV'

export function RouterLogged() {
	console.log('Router Logged')
	return (
		<Fragment>
			<TopMenu />
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route exact path="/inicio">
					{/* <Home /> */}
				</Route>
				<Route path="/alacarta">
					<VodPage />
				</Route>

				{/* <Route exact path="/envivo">
					<LiveTvPage />
				</Route>*/}

				<Route path="/musica">
					<MusicPage />
				</Route>
				

				<Route exact path="/">
					<Redirect to="/inicio" />
				</Route>
				<Route exact path="/login/form">
					<Redirect to="/inicio" />
				</Route>
			</AnimatedSwitch>
		</Fragment>
	)
}