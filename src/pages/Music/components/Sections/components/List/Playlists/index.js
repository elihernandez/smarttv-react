import React, { Fragment, useState, useEffect, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import { TitleList } from '../../../../../../../components/List/components/Title'
import { DescriptionList } from '../../../../../../../components/List/components/Description'
// import { SlickSlider } from '../../../SlickCarousel'
// import { Item } from '../../../ListItem'
import { SlickSliderHorizontal } from '../../../../../../../components/SlickCarousel'
import { Navigation } from '../../../../../../../js/SpatialNavigation'
import { ItemPlaylist } from '../../../../../../../components/ListItem'
import { CSSTransition } from 'react-transition-group'

export const ListPlaylists = ({ data, sliderVerticalRef }) => {
	const slidesToShow = 6
	const { title, description, playLists } = data
	const [show, setShow] = useState(false)
	// const posterType = 2
	// const slidesToShow = 6
	// const classes = 'list list-tracks square'
	// const { title, description } = data
	// data.id = uuid()

	const sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: false,
		speed: 0,
		autoplay: false,
		autoplaySpeed: 6000,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		variableWidth: false,
		pauseOnHover: true,
		swipeToSlide: false,
		className: 'slider-collection-playlists'
	}

	useEffect(() => {
		Navigation.add('.item-track')
		setShow(true)
	}, [])

	return (
		<Fragment>
			<TitleList title={title} />
			<DescriptionList description={description} />
			<CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
				<div>
					<SlickSliderHorizontal sliderRef={sliderRef} settings={settings}>
						{
							playLists.map((dataPlaylist, index) => {
								if(index < slidesToShow){
									return <ItemPlaylist key={dataPlaylist.regID} data={dataPlaylist} sliderVerticalRef={sliderVerticalRef} />
								}
							})   
						}
					</SlickSliderHorizontal>
				</div>
			</CSSTransition>
		</Fragment>
	)
}