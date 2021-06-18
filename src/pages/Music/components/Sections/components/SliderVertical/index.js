import React, { useRef, useEffect, useMemo } from 'react'
// import { useDispatch } from 'react-redux'
// import { setData } from '../../../../../../redux/reducers/musicReducer'
import { SlickSliderVertical } from '../../../../../../components/SlickCarousel'
import { SliderHorizontal } from '../SliderHorizontal'
import { Navigation } from '../../../../../../js/SpatialNavigation'
import './styles.css'

export const SliderVertical = ({ data }) => {
	console.log('Slider Vertical')
	// const dispatch = useDispatch()
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
		speed: 250,
		autoplay: false,
		autoplaySpeed: 6000,
		arrows: false,
		variableWidth: false,
		adaptiveHeight: false,
		className: 'slider-music'
	}

	useEffect(() => {
		if(Object.entries(data).length !== 0){
			Navigation.add('.item-track', '' , '#music-home-catalogue')
			Navigation.focus('#music-home-catalogue')
		}
		
		return () => {
			// dispatch(setData([]))
			Navigation.remove('#music-home-catalogue')
		}
	}, [data])

	const Slider = useMemo(() => {
		return <SlickSliderVertical sliderRef={sliderRef} settings={settings}>
			{
				musicSections.map((data) => {
					return <SliderHorizontal key={data.musicCollectionID} data={data} sliderVerticalRef={sliderRef} />
				})
			}
		</SlickSliderVertical>
	}, [data])
    
	return (
		<div id="music-home-catalogue">
			{ Slider }
		</div>	
	)
}