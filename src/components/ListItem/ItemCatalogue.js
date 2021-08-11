import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovie } from '../../redux/reducers/vodReducer'
import {  isMovie, posterTypeSize, contentType } from '../../js/String'
import { isKeyDown, isKeyEnter, isKeyUp } from '../../js/Keyboard'
import { getProgressMovie } from '../../js/Time'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Img } from './Img'

export function ItemCatalogue({ id, posterType, data, sliderVerticalRef }) {
	// console.log('ItemCatalogue')
	const { 
		Title, 
		Length, 
		Registro, 
		ResumePos, 
		ContentType, 
		HDPosterUrlPortrait, 
		HDPosterUrlLandscape
	} = data

	const dispatch = useDispatch()
	const history = useHistory()
	const match = useRouteMatch()
	const className = posterTypeSize(posterType)
	const url = `${match.url}/${contentType(ContentType)}/${Registro}`

	const handleMove = (e) => {
		if(isKeyEnter(e)){
			dispatch(setMovie(data))
			
			history.push({
				pathname: url,
				state: { data }
			})
		}

		if(isKeyDown(e)){
			sliderVerticalRef.current.slickNext()
		}

		if(isKeyUp(e)){
			sliderVerticalRef.current.slickPrev()
		}
	}

	return (
		<div className="item-link">
			<div id={id} className={`item-catalogue ${className}`} tabIndex="-1" onClick={handleMove} onKeyDown={handleMove}>
				<div className="background-item">
					<Img title={Title} posterType={posterType} imgPortrait={HDPosterUrlPortrait} imgLandscape={HDPosterUrlLandscape} />
					{ResumePos &&
						<div className="progress-bar-content">
							<LinearProgress variant="determinate" value={getProgressMovie(ResumePos, Length)} />
						</div>
					}
				</div>
			</div>
		</div>
	)
}