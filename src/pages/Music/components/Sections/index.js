import React, { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home } from './components/Home'
import { LoaderSpinner } from '../../../../components/Loader'
// import { Artist } from './components/Artist'
// import { Album } from './components/Album'
// import { Playlist } from './components/Playlist'
import './styles.css'

export function Sections(){
	const isLoading = useSelector(state => state.music.isLoading)

	const Router = useMemo(() => {
		return <Switch>
			<Route path='/musica/inicio' component={Home} />

			{/* <Route exact path={`${url}/artista/:artistID`} >
			<Artist />             
		</Route>
		
		<Route exact path={`${url}/album/:albumID`} >
			<Album />             
		</Route>

		<Route exact path={`${url}/playlist/:playlistID`} >
			<Playlist />           
		</Route> */}
		</Switch>
	}, [])

	return (
		<div className="content-section">
			{ Router }
			<LoaderSpinner isShow={isLoading} />
		</div>
	)
}