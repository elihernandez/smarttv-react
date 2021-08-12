import React, { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import Player from './Player'
import { useSelector } from 'react-redux'
import ButtonPlay from './Buttons/ButtonPlay'
import ProgressBar from './ProgressBar'
// import { useAxios } from '../../hooks/useAxios'
// import { Player } from './components/Player'
import './styles.css'

export default function VideoPage() {
	console.log('Video Page')
	const { fetchData } = useAxios()
	const movie = useSelector(state => state.vod.movie)
	const [response, setResponse] = useState(null)
	const { Registro } = movie

	useEffect(() => {
		fetchData({ section: 'link-video', params: { registro: Registro }})
			.then(response => {
				console.log(response)
				setResponse(response)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<div className="video-page">
			<div className="video-wrapper">
				{response && (
					<Player movie={movie} data={response} />
				)}
				<div className="video-controllers">
					<ButtonPlay />
					<ProgressBar />
					{/* <ProgressBar /> */}
					<div className="controls">
						<div className="left">
							{/* <Timer /> */}
						</div>
						<div className="buttons">
							{/* <ButtonBackward />
							<ButtonPlay />
							<ButtonForward /> */}
						</div>
						<div className="right">
							{/* <ButtonFullScreen /> */}
						</div>
					</div>
				</div>
				{/* <Player state={state} dispatchVod={dispatchVod}/> */}
			</div>
		</div>
	)
}