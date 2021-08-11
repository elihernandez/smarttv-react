import React from 'react'
import Player from './Player'
import ButtonPlay from './Buttons/ButtonPlay'
import ProgressBar from './ProgressBar'
// import { useAxios } from '../../hooks/useAxios'
// import { Player } from './components/Player'
import './styles.css'

export default function VideoPage() {
	console.log('Video Page')

	return (
		<div className="video-page">
			<div className="video-wrapper">
				<Player />
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