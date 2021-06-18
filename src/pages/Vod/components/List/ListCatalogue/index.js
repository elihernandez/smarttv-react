import React, { Fragment, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TitleList } from '../../../../../components/List/components/Title'
import { SlickSliderHorizontal } from '../../../../../components/SlickCarousel'
import { ItemCatalogue } from '../../../../../components/ListItem'

export const ListCatalogue = ({ data, sliderVerticalRef }) => {
	console.log('List Catalogue')
	const { category, poster_type } = data
	const listID = `list-${category}`
	const slidesToShow = poster_type == 0 ? 7 : 5

	const settings = {
		accesibilty: false,
		dots: false,
		infinite: false,
		// lazyLoad: 'progressive',
		speed: 250,
		autoplay: false,
		autoplaySpeed: 6000,
		slidesToShow: slidesToShow,
		focusOnSelect: false,
		slidesToScroll: 1,
		variableWidth: false,
		pauseOnHover: true,
		swipeToSlide: false,
		className: 'slider-collection-catalogue'
	}

	return (
		<Fragment>
			<TitleList title={category} />
			<div id={listID}>
				<SlickSliderHorizontal settings={settings}>
					{data.cmData.map((dataItem) => {
						return (
							<ItemCatalogue
								id={`list-${category}-${dataItem.Registro}`}
								data={dataItem}
								key={dataItem.Registro}
								posterType={data.poster_type}
								titleCategory={data.category}
								sliderVerticalRef={sliderVerticalRef} />
						)
					})}
				</SlickSliderHorizontal>
			</div>
		</Fragment>
	)
}