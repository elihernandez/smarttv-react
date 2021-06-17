import React from 'react'

export const Director = ({ director }) => {
	return (
		<div className="group-director">
			<span className="group">
				<p className="text-group">Director:</p>
				<p className="director">{director}</p>
			</span>
		</div>
	)
}