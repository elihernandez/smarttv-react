import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginPage } from '../../../pages/Login'
import { AnimatedSwitch } from 'react-router-transition'

export function RouterLoggedOut() {
	return (
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 0 }}
			atActive={{ opacity: 1 }}
			className="switch-wrapper"
	  	>
			<Route exact path="/">
				<Redirect to="/login/info" />
			</Route>
			<Route exact path="/login/:type?">
				<LoginPage />
			</Route>
		</AnimatedSwitch>
	)
}