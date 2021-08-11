import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import { SlickSliderHorizontal } from '../../../components/SlickCarousel'
import { Navigation } from '../../../js/SpatialNavigation'
import './styles.css'

export default function ButtonsMenu({ data }) {
	const focus = useSelector(state => state.focus.buttonMenu)

	const settings = {
		accessibility: true,
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 5
	}

	useEffect(() => {
		setTimeout(() => {
			console.log(focus)
			Navigation.add('.item-button', focus, '#buttons-menu')
			Navigation.focus('#buttons-menu')
		}, 200)

		return () => {
			Navigation.remove('#buttons-menu')
		}
	}, [])

	return (
		<div className="buttons-menu-wrapper" id="buttons-menu">
			<SlickSliderHorizontal settings={settings}>
				{data.map((button) => {
					if(button.ContentType !== 'leon_music'){
						return <Button key={button.orden} data={button}/>
					}
				})}
			</SlickSliderHorizontal>
		</div>
	)
}