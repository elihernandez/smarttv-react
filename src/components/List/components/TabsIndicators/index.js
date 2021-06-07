import React, { useState, useEffect } from 'react'

export const TabsIndicators = ({slidesToShow, data, initialSlide, pageActive}) => {
	const length = data.length
	const pages = Math.ceil(length / slidesToShow)
	const items = []
	for (let index = 0; index < pages; index++) {
		items.push(index)
	}

	const [start, setStart] = useState(false)
	const [indicatorActive, setIndicatorActive] = useState(null)

	useEffect(() => {
		const indicatorActive =  Math.ceil(initialSlide / slidesToShow)
		setIndicatorActive(indicatorActive)
		setStart(true)
	}, [initialSlide])

	useEffect(() => {
		if(start){
			const indicatorActive =  Math.ceil(pageActive / slidesToShow)
			setIndicatorActive(indicatorActive)
		}
	}, [pageActive])

	return (
		<div className="tabs-indicators">
			<ul className="list-indicators">
				{
					items.map((element) => {
						return <li 
							key={element} 
							className={`item-indicator ${element === indicatorActive ? 'active' : ''}`}>
						</li>
					})
				}
			</ul>
		</div>
	)
}