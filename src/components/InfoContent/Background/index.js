import React from 'react'
import { LazyImage } from '../../Image'
import 'react-lazy-load-image-component/src/effects/opacity.css'

export const ImgBackground = ({ title, img, type }) => {

	const list = {
		'movie': <LazyImage img={img} alt={`background-${title}`} type="webp" recoverType="jpg" />,
		'serie': <LazyImage img={img} alt={`background-${title}`} type="png" recoverType="png" />
	}
	
	return list[type]
}

export const Background = ({children }) => {
	return (
		<div className="background">
			{ children }
			<div className="overlay top s-10" />
			<div className="overlay top s-20" />
			<div className="overlay top s-30" />
			<div className="overlay bottom s-10" />
			<div className="overlay bottom s-20" />
			<div className="overlay bottom s-30" />
			<div className="overlay left s-10" />
			<div className="overlay left s-20" />
			<div className="overlay left s-30" />
		</div>
	)
}