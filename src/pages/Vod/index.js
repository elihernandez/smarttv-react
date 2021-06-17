import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import { Route } from 'react-router-dom'
import { Catalogue } from './components/Catalogue'
import { MoviePage } from '../Movie'
import { SeriePage } from '../Serie'
import './styles.css'

export const MemoizedVodPage = () => {
	console.log('Vod Page')
	return (
		<div className="wrapper-alacarta">
			<Catalogue />
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 1 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route exact path="/alacarta/pelicula/:movieID">
					<MoviePage />
				</Route>
				<Route exact path="/alacarta/serie/:serieID">
					<SeriePage />
				</Route>
			</AnimatedSwitch>
		</div>
	)
}

export const VodPage = React.memo(MemoizedVodPage)