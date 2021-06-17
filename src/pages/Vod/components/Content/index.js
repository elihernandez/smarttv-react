import React, { Fragment } from 'react'
import { Catalogue } from '../Catalogue'
import { MoviePage } from '../../../Movie'
import { SeriePage } from '../../../Serie'

export const Content = () => {
	
	return (
		<Fragment>
			<Catalogue />
			<MoviePage />
			<SeriePage />
			
			{/* <Route path={`${url}/pelicula/:contentId`} >
			</Route>
			<Route path={`${url}/serie/:contentId`} >
				<SeriePage />
			</Route>
			<Route path={`${url}/:contentType/:contentId/video`} >
				<VideoVod state={vodState} vodDispatch={vodDispatch} />
			</Route> */}
		
		</Fragment>
	)
}