import React from 'react'

export function Button({ data }) {
	const { title, handleClick, icon } = data

	return (
		<li className="list-item" onClick={handleClick} tabIndex="-1">
			{icon && (
				<i className={icon} />
			)}
			<p>{title}</p>
		</li>
	)
}