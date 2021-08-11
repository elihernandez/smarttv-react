import React from 'react'
import { minutesToHoursString } from '../../../js/Time'

export const TimeRemaining = ({ length, resumePos }) => {

	if(resumePos !== '' && resumePos !== 0){
		const lengthMovie = length.replace(' min', '')
		const duration = lengthMovie * 60
		const timeElapsed = resumePos / 1000
		const timeRemaining = duration - timeElapsed
		const time = (timeElapsed / duration) * 100

		return <div className="group-time-remaining">
			<div className="progress-wrapper">
				<div className="progress-elapsed" style={{ width: `${time}%` }} />
			</div>
			<p>Tiempo restante: &nbsp;{minutesToHoursString(timeRemaining)}</p>
		</div>
	}

	return null
}