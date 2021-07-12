import React, { useRef, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { LazyImage } from '../Image'
import { SlickSliderHorizontal } from '../SlickCarousel'
import { Navigation } from '../../js/SpatialNavigation'
import { useSelector } from 'react-redux'
import { setData, setLoading } from '../../redux/reducers/spotlightReducer'
import './styles.css'

export function Spotlight() {
	const sliderRef = useRef(null)
	const data = useSelector(state => state.spotlight.data)
	console.log(data)
	useAxios({
		section: 'spotlight',
		setData: setData,
		setLoading: setLoading
	})

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnFocus: true,
		pauseOnHover: true,
		swipeToSlide: true,
		focusOnSelect: true,
	}

	const onFocus = () => {
		sliderRef.current.slickPause()
	}

	const onBlur = () => {
		sliderRef.current.slickPlay()
	}

	useEffect(() => {
		// Navigation.add('.slick-slide')
		
		// setTimeout(() => {
		// 	const slides = document.querySelectorAll('.spotlight-wrapper .slick-slide')
		// 	slides.forEach((slide) => {
		// 		slide.addEventListener('focus', onFocus)
		// 		slide.addEventListener('blur', onBlur)
		// 	})
		// }, 500)

		// return () => {
		// 	const slides = document.querySelectorAll('.spotlight-wrapper .slick-slide')
		// 	slides.forEach((slide) => {
		// 		slide.removeEventListener('focus', onFocus)
		// 		slide.removeEventListener('blur', onBlur)
		// 	})
		// }
	}, [])

	return (
		<div className="spotlight-wrapper">
			<SlickSliderHorizontal sliderRef={sliderRef} settings={settings}>
				{data.map(({ Registro, ImgLandscape }) => {
					return <div className="spotlight-item" key={Registro} style={{ width: '100%' }}>
						<LazyImage
							img={ImgLandscape}
							alt={`spotlight-image-${Registro}`}
							type="webp"
							recoverType="png"
						/>
					</div>
					
				})}
			</SlickSliderHorizontal>
		</div>
	)
}