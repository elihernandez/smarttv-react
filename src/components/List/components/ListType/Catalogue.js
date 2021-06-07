import React from 'react'
import { TitleList } from '../Title'
import { SlickSlider } from '../../../SlickCarousel'

export const ListCatalogue = ({ data, listType }) => {
	const { category, poster_type } = data
	const slidesToShow = poster_type == 0 ? 7 : 5
	const classes = `list list-catalogue ${poster_type == 0 ? 'portrait' : 'landscape'}`

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		swipeToSlide: true,
		focusOnSelect: true,
		speed: 500
	}

	return (
		<div className={classes}>
			<TitleList title={category} />
			{/* <SlickSlider settings={settings}>
				{data.cmData.map((dataItem) => {
					return (
						<Item key={dataItem.Registro} posterType={data.poster_type} data={dataItem} listType={listType} titleCategory={data.category} />
					)
				})}
			</SlickSlider> */}
		</div>
	)
}