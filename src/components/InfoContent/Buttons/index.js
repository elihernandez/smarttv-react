import React from 'react'

export const ButtonWatch = ({ resumePos, handleClick}) => {
	return <button type="button" className="button button-watch" onClick={(e) => handleClick(e, false)} onKeyDown={(e) => handleClick(e, false)} tabIndex="-1">
		<i className="fas fa-play" />{resumePos !== '' || resumePos !== 0 ? 'Ver ahora' : 'Reanudar'}
	</button>
}

export const ButtonStart = ({ resumePos, handleClick }) => {

	if(resumePos !== '' && resumePos !== 0){
		return <button type="button" className="button button-start" onClick={(e) => handleClick(e, true)} onKeyDown={(e) => handleClick(e, true)} tabIndex="-1">
			Desde el comienzo
		</button>
	}

	return null
}