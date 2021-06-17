import React from 'react'
import { ListCatalogue } from '../List/ListCatalogue'
import './styles.css'

export const SliderHorizontal = ({ data, sliderVerticalRef }) => {
	console.log('Slider Horizontal')
	return (	
		<ListCatalogue data={data} sliderVerticalRef={sliderVerticalRef} />
	)
}