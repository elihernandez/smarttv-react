import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import loadable from '@loadable/component'
import { urlSections } from '../../../api/urlSections'
// import TopMenu from '../../../components/TopMenu'
import { Sidebar } from '../../../components/Sidebar'
const TopMenu = loadable(() => import('../../../components/TopMenu'))
const HomePage = loadable(() => import('../../../pages/Home'))
const VodPage = loadable(() => import('../../../pages/Vod'))
// const MusicPage = loadable(() => import('../../../pages/Music'))
// const LiveTV = loadable(() => import('../../../pages/LiveTV'))

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
				<Route exact path={`/${urlSections.home}`} component={HomePage} />
				{/* <Route exact path={`/${urlSections.livetv}`} component={LiveTV} /> */}
				<Route path={`/${urlSections.vod}`} component={VodPage} />
				{/* <Route path={`/${urlSections.music}`} component={MusicPage} /> */}
	
				<Route exact path="/" component={RedirectHome} />
				<Route exact path="/login/form" component={RedirectHome} />
			</Switch>
			{/* <Sidebar /> */}
		</Fragment>
	)
}