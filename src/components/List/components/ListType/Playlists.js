import React, { useEffect } from 'react'
import { TitleList } from '../Title'
import { DescriptionList } from '../Description'
import { SlickSlider } from '../../../SlickCarousel'
import { Item } from '../../../ListItem'
import { Navigation } from '../../../../js/SpatialNavigation'

export const ListPlaylists = ({ data, listType, indexList, tabValues, sliderVerticalRef }) => {
	const posterType = 2
	const slidesToShow = 5
	const classes = 'list list-tracks square'
	const { title, description } = data

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
				{data.playLists.map((playlist, index) => {
					if(index < slidesToShow){
						return (
							<Item key={playlist.regID} posterType={posterType} data={playlist} listType={listType} titleCategory={data.title} listTracks={data.tracks} />
						)
					}
				})}
			</SlickSlider>
		</div>
	)
}