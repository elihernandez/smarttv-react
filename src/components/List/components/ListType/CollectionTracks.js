import React, { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { TitleList } from '../Title'
import { DescriptionList } from '../Description'
import { SlickSlider } from '../../../SlickCarousel'
import { Item } from '../../../ListItem'
import { Navigation } from '../../../../js/SpatialNavigation'

export const ListCollectionTracks = ({ data, listType, indexList, tabValues, sliderVerticalRef }) => {
	const posterType = 2
	const slidesToShow = 6
	const classes = 'list list-tracks square'
	const { title, description } = data
	data.id = uuid()

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		swipeToSlide: true,
		focusOnSelect: true,
		variableWidth: false,
		speed: 500
	}

	useEffect(() => {
		Navigation.add('.item-track')
		
		return () => {
			
		}
	}, [])

	return (
		<div className={classes}>
			<TitleList title={title} />
			{description && (
				<DescriptionList description={description} />
			)}
			<SlickSlider settings={settings}>
				{data.tracks.map((track, index) => {
					if(index < 1){
						return (
							<Item key={track.regID} posterType={posterType} data={track} listType={listType} titleCategory={data.title} listTracks={data.tracks} collection={data} sliderVerticalRef={sliderVerticalRef} />
						)
					}
				})}
			</SlickSlider>
		</div>		
	)
}