import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function ButtonPlay(){
	const playing = useSelector(state => state.video.playing)

	return <span className="video-button">
		{playing ? (
			<i className="fas fa-pause" />
		) : (
			<i className="fas fa-play" />
		)} 
	</span>
}