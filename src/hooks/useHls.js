import { useState, useEffect } from 'react'
import Hls from 'hls.js'
// console.log(Hls.version)
const config = {
	debug: process.env.NODE_ENV !== 'production' ? false : false,
	initialLiveManifestSize: 3,
	liveBackBufferLength: 900,
	enableWorker: false,
	nudgeMaxRetry: 10,
	manifestLoadingMaxRetry: 10,
	fragLoadingRetryDelay: 3000,
	manifestLoadingRetryDelay: 3000,
	levelLoadingRetryDelay: 3000,
}

export default function useHls(){
	console.log('useHls')
	const [state, setState] = useState({ hsl: null, url: null, videoMedia: null })
	const { hls, url, videoMedia } = state

	const loadSource = ({ url, videoMedia, startPosition = -1 }) => {
		config.startPosition = startPosition
		setState({ hls: new Hls(config), url, videoMedia })
	}

	useEffect(() => {
		if (Hls.isSupported() && url && videoMedia) {
			hls.attachMedia(videoMedia)
			console.log('Hls Supported')

			hls.on(Hls.Events.MEDIA_ATTACHED, function () {
				hls.loadSource(url)
				hls.on(Hls.Events.MANIFEST_PARSED, function () {
					// if(movie){
					// 	if(movie.ResumePos){
					// 		video.current.currentTime = movie.ResumePos / 1000
					// 		dispatch({ type: 'setCurrentTime', payload: movie.ResumePos / 1000 })
					// 		dispatch({ type: 'updateVideoRef', payload: video })
					// 	}
					// }
					// if(dispatch){
					// 	dispatch({ type: 'setHls', payload: hls })
					// }
				})
			})
		}

		return () => {
			if(Hls.isSupported() && url && videoMedia){
				hls.detachMedia()
				hls.destroy()
			}
		}
	}, [url, videoMedia])

	return { loadSource, hls }
}

// export function useHls(video, url, dispatch = false, movie = false) {
// 	const hls = new Hls(config)
// 	const [error, setError] = useState(false)

// 	useEffect(() => {
// 		if(url){
// 			setError(false)
// 			if (Hls.isSupported()) {
// 				hls.attachMedia(video.current)

// 				hls.on(Hls.Events.MEDIA_ATTACHED, function () {
// 					hls.loadSource(url)
// 					hls.on(Hls.Events.MANIFEST_PARSED, function () {
// 						// if(movie){
// 						// 	if(movie.ResumePos){
// 						// 		video.current.currentTime = movie.ResumePos / 1000
// 						// 		dispatch({ type: 'setCurrentTime', payload: movie.ResumePos / 1000 })
// 						// 		dispatch({ type: 'updateVideoRef', payload: video })
// 						// 	}
// 						// }
// 						// if(dispatch){
// 						// 	dispatch({ type: 'setHls', payload: hls })
// 						// }
// 					})
// 				})

// 				hls.on(Hls.Events.MEDIA_DETACHING, function(){
// 					// video.current.pause()
// 				})
			
// 				hls.on(Hls.Events.ERROR, function (event, data) {
// 					// if(process.env.NODE_ENV !== 'production'){
// 					// 	console.log(event, data)
// 					// }	
								
// 					// if(event == 'hlsError' && data.details == 'manifestLoadError'){
// 					// 	hls.destroy()
// 					// 	dispatch({ type: 'updateLoading', payload: false })
// 					// 	dispatch({ type: 'setHls', payload: null })
// 					// 	setError('Señal no disponible por el momento')
// 					// }

// 					// if(data.details == 'bufferStalledError'){
// 					// 	hls.startLoad()
// 					// 	dispatch({ type: 'updateLoading', payload: true })
// 					// }

// 					// if(data.details == 'audioTrackLoadError'){
// 					// 	hls.recoverMediaError()
// 					// 	hls.startLoad()
// 					// 	dispatch({ type: 'updateLoading', payload: true })
// 					// }

// 					// if(data.response && data.response.code == 403){
// 					// 	setTimeout(() => {
// 					// 		hls.startLoad()
// 					// 	}, 1000)
// 					// 	dispatch({ type: 'updateLoading', payload: true })
// 					// }
// 				})

// 				hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function(event, data){
// 					// if(dispatch){
// 					// 	dispatch({ type: 'setAudioTracks', payload: data })
// 					// }
// 				})
						
// 				hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(event, data){
// 					// if(dispatch){
// 					// 	dispatch({ type: 'setSubtitleTracks', payload: data })
// 					// }
// 				})
// 			}
// 		}

// 		// if(url === null){
// 		// 	setError(true)
// 		// }

// 		return (() => {
// 			hls.detachMedia()
// 			hls.destroy()
// 		})
// 	}, [url])

// 	return { error, setError }
// }