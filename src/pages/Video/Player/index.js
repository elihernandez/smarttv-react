import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setVideoRef } from '../../../redux/reducers/videoReducer'
import useHls from '../../../hooks/useHls'
// import getLink from '../../../services/video/getLink'
// import { useAxios } from '../../../hooks/useAxios'
import { setPlaying } from '../../../redux/reducers/videoReducer'
import './styles.css'

export default function Player({ movie, data }){
	console.log('Player')
	const hls = useHls()
	const videoRef = useRef(null)
	const dispatch = useDispatch()
	const { ResumePos } = movie

	useEffect(() => {
		hls.loadSource({
			url: data.Url, 
			videoMedia: videoRef.current,
			startPosition: parseInt(ResumePos / 1000)
		})

		dispatch(setVideoRef(videoRef.current))
	}, [])

	const onCanPlayThrough = () => {
		console.log('can play trough')
		videoRef.current.play()
	}

	const onPlay = () => {
		dispatch(setPlaying(true))
	}

	const onPause = () => {
		dispatch(setPlaying(false))
	}

	const onError = () => {
	}

	const onWaiting = () => {
	}

	return <video
		ref={videoRef}
		onError={onError}
		onAbort={onError}
		onPlay={onPlay}
		onPause={onPause}
		onWaiting={onWaiting}
		onCanPlayThrough={onCanPlayThrough}
	/>
}