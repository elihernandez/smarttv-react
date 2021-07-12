import React from 'react'
import { limitString } from '../../js/String'

export const Description = ({ description, limit = 100 }) => {
	return (
		<div className="description-content">
			<h3 className="description-item">{limitString(description, limit)}</h3>
		</div>
	)
}