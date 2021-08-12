import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { imgSourceSetPng } from '../../../js/Image'
import { urlSections } from '../../../api/urlSections'
import { isKeyEnter } from '../../../js/Keyboard'
import { setButtonMenuFocus } from '../../../redux/reducers/focusReducer'
import { useDispatch } from 'react-redux'
import './styles.css'

const url = {
	'leon_livetv': urlSections.livetv,
	'leon_movies': urlSections.vod,
	'leon_radio': urlSections.radio,
	'leon_music': urlSections.music,
	'leon_kids': urlSections.kids
}

export default function Button ({ data }) {
	const history = useHistory()
	const dispatch = useDispatch()
	const { titulo = '', ContentType = '', PosterCardUrlLandscape = '' } = data

	const handleClick = (e) => {
		if(isKeyEnter(e)){
			history.push(url[ContentType])
			dispatch(setButtonMenuFocus(`#button-menu-${ContentType}`))
		}
	}

	return (
		<Link to={`${url[ContentType]}`} onClick={handleClick} onKeyDown={handleClick}>
			<div
				key={ContentType}
				className="item-button"
				tabIndex="-1"
				id={`button-menu-${ContentType}`}
			>
				<picture>
					<source
						srcSet={PosterCardUrlLandscape}
						type="image/webp"
					/>
					<source
						srcSet={imgSourceSetPng(PosterCardUrlLandscape,'png')}
						type="image/png"
					/>
					<img
						src="build/assets/images/logos/guiahtv/error-tv-landscape.png"
						alt={`${ContentType}-image`}
						className="image-button"
					/>
				</picture>
				<h2 className="title-button title-2">{titulo}</h2>
			</div>
		</Link>
	)
}