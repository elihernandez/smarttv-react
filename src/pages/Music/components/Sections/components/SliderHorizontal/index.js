import React, { Fragment, useRef } from 'react'
// import { ListVertical, ListHorizontal } from '../../../../../../components/List'
import { SlickSliderHorizontal } from '../../../../../../components/SlickCarousel'
import { ListCollectionTracks } from '../List/CollectionTracks'
import { ListPlaylists } from '../List/Playlists'
import './styles.css'

export const SliderHorizontal = ({ data, sliderVerticalRef }) => {

	const listType = {
		'tracks': <ListCollectionTracks data={data} sliderVerticalRef={sliderVerticalRef} />,
		'playlists': <ListPlaylists data={data} sliderVerticalRef={sliderVerticalRef} />,
		'myplaylists': <ListPlaylists data={data} sliderVerticalRef={sliderVerticalRef} />
	}
    
	return (	
		<Fragment>
			{ listType[data.contentType] }
		</Fragment>
	)
}