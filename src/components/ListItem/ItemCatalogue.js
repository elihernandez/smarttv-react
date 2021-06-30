import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovie, setSerie } from '../../redux/reducers/vodReducer'
import {  isMovie, posterTypeSize, contentType } from '../../js/String'
import { isKeyDown, isKeyEnter, isKeyUp } from '../../js/Keyboard'
import { getProgressMovie } from '../../js/Time'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Img } from './Img'

export function ItemCatalogue({ id, posterType, data, sliderVerticalRef }) {
	console.log('ItemCatalogue')
	const history = useHistory()
	const dispatch = useDispatch()
	const className = posterTypeSize(posterType)
	const { Title, Registro, ContentType, HDPosterUrlPortrait, HDPosterUrlLandscape, ResumePos, Length } = data
	const url = `${history.location.pathname}/${contentType(ContentType)}/${Registro}`

	const handleMove = (e) => {
		if(isKeyEnter(e)){
			if(isMovie(ContentType)){
				dispatch(setMovie(data))
			}else{
				dispatch(setSerie(data))
			}	

			setTimeout(() => {
				history.push(url)
			}, 100)
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