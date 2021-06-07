import React, { useEffect } from 'react'
import { H6 } from '../Typography'
import { imgSourceSetPng } from '../../js/Image'
import { useHistory } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { SlickSliderHorizontal } from '../SlickCarousel'
import { Navigation } from '../../js/SpatialNavigation'
import './styles.css'

const Button = ({ data, handleClick }) => {
	const { titulo, ContentType, PosterCardUrlLandscape } = data

	const onFocus = () => {
		console.log('focus')
	}

	return (
		<div
			key={ContentType}
			className="item-button"
			tabIndex="-1"
			onClick={() => handleClick(ContentType)}
			onFocus={onFocus}
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
			<H6 className="title-button title-2">{titulo}</H6>
		</div>
	)
}

export function ButtonsMenu() {
	const history = useHistory()
	const { data } = useAxios('buttons-menu')

	const settings = {
		accessibility: false,
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 5
	}

	const handleClick = (contentType) => {
		const url = {
			'leon_livetv': '/tv',
			'leon_movies': '/alacarta',
			'leon_radio': '/radio',
			'leon_music': '/musica',
			'leon_kids': '/zonakids'
		}

		history.push(url[contentType])
	}

	useEffect(() => {
		// Navigation.add('.slick-slide')
	}, [])

	return (
		<div className="buttons-menu-wrapper">
			<SlickSliderHorizontal settings={settings}>
				{data.map((button) => {
					if(button.ContentType !== 'leon_music'){
						return <Button key={button.orden} data={button} length={data.length} handleClick={handleClick} />
					}
				})}
			</SlickSliderHorizontal>
		</div>
	)
}