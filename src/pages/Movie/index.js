import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowTopMenu } from '../../redux/reducers/topMenuReducer'
import { InfoMovie } from '../../components/InfoContent'
import { Navigation } from '../../js/SpatialNavigation'

const MoviePage = () => {
	console.log('Movie Page')
	const dispatch = useDispatch()
	const movie = useSelector(state => state.vod.movie)
	
	useEffect(() => {
		Navigation.disable('#catalogue-vod')
		Navigation.disable('#top-menu')
		dispatch(setShowTopMenu(false))
		
		return () => {
			dispatch(setShowTopMenu(true))
			Navigation.enable('#top-menu')
			Navigation.enable('#catalogue-vod')
			Navigation.focus('#catalogue-vod')
		}
	}, [])

	return (
		<div className="movie-info info-wrapper">
			<InfoMovie data={movie} />
		</div>
	)
}

export default React.memo(MoviePage)