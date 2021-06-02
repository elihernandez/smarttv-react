import React from 'react'

export function MemoizedLink({ className, href, children }) {
	const dataUia = `${className}-label`

	return (
		<a className={className} data-uia={dataUia} href={href} target="_blank" rel="noopener">
			{children}
		</a>
	)
}

export const Link = React.memo(MemoizedLink)