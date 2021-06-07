import React, { useRef } from 'react'
// import { ListVertical, ListHorizontal } from '../../../../../../components/List'
import { SlickSliderVertical } from '../../../../../../components/SlickCarousel'
import { SliderHorizontal } from '../SliderHorizontal'
import './styles.css'

export const SliderVertical = ({ data }) => {
	const sliderRef = useRef(null)
	const { musicSections } = data

	const settings = {
		accessibility: false,
		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: false,
		swipeToSlide: false,
		focusOnSelect: false,
		speed: 0,
		autoplay: false,
		autoplaySpeed: 6000,
		arrows: false,
		variableWidth: false,
		adaptiveHeight: false,
		className: 'slider-music'
	}
    
	return (	
		<SlickSliderVertical sliderRef={sliderRef} settings={settings}>
			{
				musicSections.map((data) => {
					return <SliderHorizontal key={data.musicCollectionID} data={data} sliderVerticalRef={sliderRef} />
				})
			}
		</SlickSliderVertical>
	)
}