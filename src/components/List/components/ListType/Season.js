import React from 'react'
import { TitleList } from '../Title'
import { SlickSlider } from '../../../SlickCarousel'

export const ListSeason = ({ data, listType }) => {
	const { category, poster_type, cmData } = data
	const classes = 'list list-season wrap landscape'

	return (
		<div className={classes}>
			<TitleList title={category} />
			<div className="list-content">
				{/* <div className="list-items">
					{
						cmData.map((data) => {
							return <Item key={data.Registro} data={data} posterType={poster_type} listType={listType} />
						})
					}
				</div> */}
			</div>
		</div>
	)
}