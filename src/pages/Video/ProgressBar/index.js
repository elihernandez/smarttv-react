import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import postResumePosition from '../../../services/video/postResumePosition'
import { useDispatch, useSelector } from 'react-redux'
import { setMovie, setData } from '../../../redux/reducers/vodReducer'
import { setCurrentTime } from '../../../redux/reducers/videoReducer'
import {  transformSecondsToStringHour } from '../../../js/Time'
import './styles.css'

export default function ProgressBar(){
	const dispatch = useDispatch()
	const history = useHistory()
	const movie = useSelector(state => state.vod.movie)
	const catalogue = useSelector(state => state.vod.data)
	const token = useSelector(state => state.user.userToken)
	const videoRef = useSelector(state => state.video.videoRef)
	const currentTime = useSelector(state => state.video.currentTime)
	const [timeProgress, setTimeProgress] = useState(0)
	const [duration, setDuration] = useState('')
	const [time, setTime] = useState('00:00')

	const onTimeUpdate = () => {
		const duration = videoRef.duration
		const currentTime = videoRef.currentTime
		const time = (currentTime / duration) * 100
		setTimeProgress(time)

		const value = transformSecondsToStringHour(currentTime)
		setTime(value)
		dispatch(setCurrentTime(currentTime))
	}

	const onDurationChange = () => {
		const value = transformSecondsToStringHour(videoRef.duration)
		setDuration(value)
	}

	useEffect(() => {
		if(videoRef){
			videoRef.addEventListener('durationchange', onDurationChange)
			videoRef.addEventListener('timeupdate', onTimeUpdate)
		}

		return () => {
			if(videoRef){
				videoRef.removeEventListener('durationchange', onDurationChange)
				videoRef.removeEventListener('timeupdate', onTimeUpdate)
			}
		}
	}, [videoRef])

	useEffect(() => {
		return () => {
			if(history.action === 'POP'){
				const positionVideo = Math.round(currentTime * 1000)
				postResumePosition(movie.Registro, positionVideo, token)

				const newMovie = updatePositionMovie(movie, positionVideo)
				dispatch(setMovie(newMovie))

				const newCatalogue = updatePositionMoviesData(movie, catalogue, positionVideo)
				dispatch(setData(newCatalogue))
			}
		}
	}, [currentTime])
    
	return (
		<div className="progress-bar">
			<div className="progress-wrapper">
				<div className="time-movie">
					<h1>{time}</h1>
				</div>
				<div className="progress">
					<div className="actual-progress" style={{ 'width': `${timeProgress}%` }}>
						<div className="dot-progress"></div>
					</div>
				</div>
				<div className="time-movie">
					<h1>{duration}</h1>
				</div>
			</div>
		</div>
	)
}

function updatePositionMovie(movie, positionVideo){
	const newMovie = Object.assign({}, movie)
	newMovie.ResumePos = positionVideo
	return newMovie
}

function updatePositionMoviesData(movie, catalogue, positionVideo){
	const registro = movie.Registro
	const title = movie.Title
	const newCatalogue = JSON.parse(JSON.stringify(catalogue))

	newCatalogue.forEach(categories => {
		categories.cmData.forEach(movies => {
			if(movies.Registro === registro && movies.Title === title){
				movies.ResumePos = positionVideo
			}
		})
	})

	return newCatalogue
}