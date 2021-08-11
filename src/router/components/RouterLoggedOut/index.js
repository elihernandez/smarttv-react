import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import loadable from '@loadable/component'

const LoginPage = loadable(() => import('../../../pages/Login'))

export function RouterLoggedOut() {
	const RedirectLogin = () => <Redirect to="/login/info" />

	return (
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 0 }}
			atActive={{ opacity: 1 }}
			className="switch-wrapper"
		>
			<Route exact path="/" component={RedirectLogin} />
			<Route exact path="/login/:type?" component={LoginPage} />
		</AnimatedSwitch>
	)
}