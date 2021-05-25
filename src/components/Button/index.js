import React from 'react'
import './styles.css'

export function Button({
	id = '',
	children, 
	uppercase = false,
	color='primary',
	size='width-auto',
	classes,
	type,
	onClick,
	onKeyDown
}){
	const className = `button-ui 
		${uppercase ? 'uppercase' : ''}
		${color}
		${size}
		${classes}
      `
	return(
		<button id={id} type={type} className={className} onClick={onClick} onKeyDown={onKeyDown} tabIndex="-1">{children}</button>
	)
}

export function ButtonUI({type, className, text}){
	return(
		<button type={type} className={className} tabIndex="-1">{text}</button>
	)
}