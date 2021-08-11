import React from 'react'

export const Artist = ({ artist }) => {
	return (
		<div className="group-artist">
			<span className="group">
				<p className="text-group">Actores:</p>
				<p className="artist">{artist}</p>
			</span>
		</div>
	)
}