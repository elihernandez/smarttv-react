import React, { useRef, useEffect } from 'react'
import { SlickSliderVertical } from '../../../../components/SlickCarousel'
import { SliderHorizontal } from '../SliderHorizontal'
import { Navigation } from '../../../../js/SpatialNavigation'
import './styles.css'

export const MemoizedSliderVertical = ({ data = [] }) => {
	console.log('Vertical Slider')
	const sliderRef = useRef(null)
	
	const settings = {
		accessibility: false,
		dots: false,
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
		className: 'slider-vod'
	}

	useEffect(() => {
		if(data.length > 0){
			Navigation.add('.item-catalogue', `#list-${data[0].category}-${data[0].cmData[0].Registro}` , '#catalogue-vod')
			Navigation.focus('#catalogue-vod')
		}
		
		return () => {
			Navigation.remove('#catalogue-vod')
		}
	}, [data])


	return	<div className="catalogue-vod" id="catalogue-vod">
		<SlickSliderVertical sliderRef={sliderRef} settings={settings}>
			{
				data.map((data) => {
					return <SliderHorizontal key={data.category} data={data} sliderVerticalRef={sliderRef} />
				})
			}
		</SlickSliderVertical>
	</div> 
}

export const SliderVertical = React.memo(MemoizedSliderVertical)