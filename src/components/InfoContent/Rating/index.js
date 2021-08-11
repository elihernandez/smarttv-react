import React from 'react'
import PG13 from '../../../assets/images/clasifications-movies/PG13.png'
import PG from '../../../assets/images/clasifications-movies/PG.png'
import G from '../../../assets/images/clasifications-movies/G.png'
import R from '../../../assets/images/clasifications-movies/R.png'

export const Rating = ({ rating }) => {
	
	const listRatings = {
		'PG-13': PG13,
		'PG': PG,
		'G': G,
		'R': R
	}

	return <img className="img-clasification" src={listRatings[rating.trim()]} />
}