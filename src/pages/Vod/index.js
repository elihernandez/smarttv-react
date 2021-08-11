import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'
import Catalogue from './components/Catalogue'
const MoviePage = loadable(() => import('../Movie'))
// const SeriePage = loadable(() => import('../Serie'))
const VideoPage = loadable(() => import('../Video'))
import './styles.css'

export default function VodPage() {
	return (
		<div className="wrapper-alacarta">
			<Catalogue />
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 1 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route exact path="/alacarta/pelicula/:movieID" component={MoviePage} />
				{/* <Route exact path="/alacarta/serie/:serieID" component={SeriePage} /> */}
				<Route exact path="/alacarta/:contentType/:id/video" component={VideoPage} />
			</AnimatedSwitch>
		</div>
	)
}