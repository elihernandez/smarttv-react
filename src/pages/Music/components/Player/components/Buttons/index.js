import React, { useContext, useState } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import AudioContext from '../../../../../../context/AudioContext'
import Tooltip from '@material-ui/core/Tooltip'
import { resetTrack, getPrevTrack, getNextTrack, getRandomTrack } from '../../../../scripts'
import './styles.css'

const RandomButton = ({ state, dispatch }) => {
	const { random } = state

	const handleClick = () => {
		if(random){
			dispatch({ type: 'setRandom', payload: false })
		}else{
			dispatch({ type: 'setRandom', payload: true })
		}
	}

	return (
		<Tooltip title={random ? 'Desactivar reproducción aleatoria' : 'Activar reproducción aleatoria'} placement="top-start" enterDelay={1000} enterNextDelay={1000}>
			<li className="button-item" onClick={handleClick}>
				<i className={`far fa-random random ${random ? 'active' : ''}`}></i>
			</li>
		</Tooltip>
	)
}

const RepeatButton = ({ state, dispatch }) => {
	const { repeat, repeatOne } = state
	const [tooltipText, setTooltipText] = useState('Activar repetición')

	const handleClick = () => {
		if(!repeat && !repeatOne){
			dispatch({ type: 'setRepeat', payload: true })
			dispatch({ type: 'setRepeatOne', payload: false })
			setTooltipText('Repetir una canción')
		}
		
		if(repeat && !repeatOne){
			dispatch({ type: 'setRepeat', payload: false })
			dispatch({ type: 'setRepeatOne', payload: true })
			setTooltipText('Desactivar repetición')
		}
		
		if(!repeat && repeatOne){
			dispatch({ type: 'setRepeat', payload: false })
			dispatch({ type: 'setRepeatOne', payload: false })
			setTooltipText('Activar repetición')
		}
	}

	return (
		<Tooltip title={tooltipText} placement="top-start" enterDelay={1000} enterNextDelay={1000}>
			<li className="button-item" onClick={handleClick}>
				{	!repeat && !repeatOne &&
					<i className="far fa-repeat-alt no-repeat"></i>
				}
				{	repeat && !repeatOne &&
					<i className="far fa-repeat-alt repeat"></i>
				}
				{	!repeat && repeatOne &&
					<i className="far fa-repeat-1-alt repeat-one"></i>
				}
			</li>
		</Tooltip>
	)
}

const StepBackwardButton = ({ state, dispatch }) => { 
	const history = useHistory()
	const { trackId } = useParams()
	const match = useRouteMatch()
	const { audioRef, listTrack, track, repeat, repeatOne, random, listRandomTracks } = state

	const handleHistoryPush = (url) => {
		history.push(url)
		if(repeatOne){
			dispatch({ type: 'setRepeat', payload: true })
			dispatch({ type: 'setRepeatOne', payload: false })
		}
	}

	const handleCurrentTime = (url) => {
		if(audioRef.current.currentTime >= 2){
			resetTrack(audioRef)
		}else{
			handleHistoryPush(url)
		}
	}

	const handleClick = () => {
		const { url, isTheFirstTrack } = getPrevTrack(listTrack, trackId, track, match)

		if(random){
			if(audioRef.current.currentTime >= 2){
				resetTrack(audioRef)
			}else{
				const { url, listRandom } = getRandomTrack(listTrack, track, listRandomTracks, match)
				dispatch({ type: 'setListRandomTracks', payload: listRandom })
				handleHistoryPush(url)
			}
		}else{
			if(isTheFirstTrack){
				if(repeat || repeatOne){
					handleCurrentTime(url)
				}else{
					resetTrack(audioRef)
				}
				dispatch({ type: 'setPauseList', payload: false })
			}else{
				handleCurrentTime(url)
			}
		}
	}

	return (
		<Tooltip title='Anterior' placement="top-start" enterDelay={1000} enterNextDelay={1000}>
			<li className="button-item" onClick={handleClick}>
				<i className="fas fa-step-backward"></i>
			</li>
		</Tooltip>
	)
}

const StepForwardButton = ({ state, dispatch }) => {
	const history = useHistory()
	const { trackId } = useParams()
	const match = useRouteMatch()
	const { listTrack, track, repeat, repeatOne, random, listRandomTracks } = state

	const handleHistoryPush = (url) => {
		history.push(url)
		if(repeatOne){
			dispatch({ type: 'setRepeat', payload: true })
			dispatch({ type: 'setRepeatOne', payload: false })
		}
	}

	const handleClick = () => {
		const { url, isTheLastTrack } = getNextTrack(listTrack, track.regID, track, match)
		
		if(random){
			const { url, listRandom } = getRandomTrack(listTrack, track, listRandomTracks, match)
			dispatch({ type: 'setListRandomTracks', payload: listRandom })
			handleHistoryPush(url)
		}else{
			if(isTheLastTrack){
				if(repeat){
					handleHistoryPush(url)
				}else if(repeatOne){
					handleHistoryPush(url)
				}else{
					dispatch({ type: 'setPauseList', payload: true })
					dispatch({ type: 'setPlaying', payload: false })
					handleHistoryPush(url)
				}
			}else{
				dispatch({ type: 'setPauseList', payload: false })
				handleHistoryPush(url)
			}
		}
	}

	return (
		<Tooltip title='Siguiente' placement="top-start" enterDelay={1000} enterNextDelay={1000}>
			<li className="button-item" onClick={handleClick}>
				<i className="fas fa-step-forward"></i>
			</li>
		</Tooltip>
	)
}

const PlayPauseButtons = ({ state, dispatch }) => {
	const { audioRef, playing, track } = state

	const handleClick = () => {
		if(track && track.length > 0){
			if (playing) {
				audioRef.current.pause()
				dispatch({ type: 'setPlaying', payload: false })
			} else {
				audioRef.current.play()
				dispatch({ type: 'setPlaying', payload: true })
			}
		}
	}

	return (
		<Tooltip title={playing ? 'Pausar' : 'Reanudar'} placement="top-start" enterDelay={1000} enterNextDelay={1000}>
			<li className="button-item active" onClick={handleClick}>
				{playing
					? <i className="fas fa-pause"></i>
					: <i className="fas fa-play"></i>
				}
			</li>
		</Tooltip>
	)
}

export function ButtonsPlayer() {
	const { stateAudio, dispatchAudio } = useContext(AudioContext)

	return (
		<div className="buttons-player">
			<ul className="list-buttons">
				<RandomButton state={stateAudio} dispatch={dispatchAudio} />
				<StepBackwardButton state={stateAudio} dispatch={dispatchAudio} />
				<PlayPauseButtons state={stateAudio} dispatch={dispatchAudio} />
				<StepForwardButton state={stateAudio} dispatch={dispatchAudio} />
				<RepeatButton state={stateAudio} dispatch={dispatchAudio} />
			</ul>
		</div>
	)
}