import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import loadable from '@loadable/component'
// import TopMenu from '../../../components/TopMenu'
const TopMenu = loadable(() => import('../../../components/TopMenu'))
const Home = loadable(() => import('../../../pages/Home'))
const VodPage = loadable(() => import('../../../pages/Vod'))
const MusicPage = loadable(() => import('../../../pages/Music'))

export function RouterLogged() {
	console.log('Router Logged')

	const RedirectHome = () => <Redirect to="/inicio" />
	return (
		<Fragment>
			<TopMenu />
			<Switch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route exact path="/inicio" />
				<Route path="/alacarta" component={VodPage} />
				<Route path="/musica" component={MusicPage} />

				<Route exact path="/" component={RedirectHome} />
				<Route exact path="/login/form" component={RedirectHome} />
			</Switch>
		</Fragment>
	)
}