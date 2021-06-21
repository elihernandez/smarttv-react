import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import { Route } from 'react-router-dom'
import Catalogue from './components/Catalogue'
import loadable from '@loadable/component'
const MoviePage = loadable(() => import('../Movie'))
const SeriePage = loadable(() => import('../Serie'))
import './styles.css'

const VodPage = () => {
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
				<Route exact path="/alacarta/serie/:serieID" component={SeriePage} />
			</AnimatedSwitch>
		</div>
	)
}

export default VodPage