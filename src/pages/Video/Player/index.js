import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVideoRef } from '../../../redux/reducers/videoReducer'
import useHls from '../../../hooks/useHls'
import getLink from '../../../services/video/getLink'
import { setPlaying } from '../../../redux/reducers/videoReducer'
import './styles.css'

export default function Player(){
	console.log('Video')
	const hls = useHls()
	const videoRef = useRef(null)
	const dispatch = useDispatch()
	const movie = useSelector(state => state.vod.movie)
	const { Registro, ResumePos } = movie
	const token = useSelector(state => state.user.userToken)

	useEffect(() => {
		const requestLink = async () => {
			try{
				const response = await getLink(Registro, token)

				hls.loadSource({
					url: response.Url, 
					videoMedia: videoRef.current,
					startPosition: parseInt(ResumePos / 1000)
				})

				dispatch(setVideoRef(videoRef.current))
			}catch(e){
				console.log(e)
			}
		}

		requestLink()
	}, [])

	const onCanPlayThrough = () => {
		console.log('can play trough')
		setTimeout(() => videoRef.current.play(), 1000)
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