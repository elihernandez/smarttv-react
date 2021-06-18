import React from 'react'
import { Link } from './Link'
import './styles.css'

const MemoizedList = ({ title, data }) => {
	console.log('List')
	return (
		<div className="list-section" id="links-sidebar-music">
			<h3 className="list-title">{title}</h3>
			<div className="list-menu">
				{
					data.map((linkData) => {
						return <Link key={linkData.title} data={linkData} />
					})
				}
			</div>
		</div>
	)
}

export const List = React.memo(MemoizedList)