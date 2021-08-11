import React, { useRef } from 'react'
import { LazyImage } from '../../../components/Image'
import { SlickSliderHorizontal } from '../../../components/SlickCarousel'
import { Navigation } from '../../../js/SpatialNavigation'
import './styles.css'

export default function Spotlight({ data }) {
	const sliderRef = useRef(null)

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

	// const onFocus = () => {
	// 	sliderRef.current.slickPause()
	// }

	// const onBlur = () => {
	// 	sliderRef.current.slickPlay()
	// }

	// useEffect(() => {
	// 	Navigation.add('.slick-slide')
		
	// 	setTimeout(() => {
	// 		const slides = document.querySelectorAll('.spotlight-wrapper .slick-slide')
	// 		slides.forEach((slide) => {
	// 			slide.addEventListener('focus', onFocus)
	// 			slide.addEventListener('blur', onBlur)
	// 		})
	// 	}, 500)

	// 	return () => {
	// 		const slides = document.querySelectorAll('.spotlight-wrapper .slick-slide')
	// 		slides.forEach((slide) => {
	// 			slide.removeEventListener('focus', onFocus)
	// 			slide.removeEventListener('blur', onBlur)
	// 		})
	// 	}
	// }, [])

	// if(loading){
	// 	return <h1>Cargando...</h1>
	// }

	// if(error){
	// 	return error
	// }

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