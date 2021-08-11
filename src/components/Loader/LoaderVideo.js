import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoaderVideo } from '../../redux/reducers/loaderReducer'
import { CSSTransition } from 'react-transition-group'
import videoLogo from '../../assets/videos/video-logo.mp4'

export const MemoizedLoaderVideo = () => {
	const videoRef = useRef(null)
	const dispatch = useDispatch()
	const isShow = useSelector(state => state.loader.isShowLoaderVideo)

	useEffect(() => {
		const onEndedLoaderVideo = () => {
			videoRef.current.removeEventListener('ended', onEndedLoaderVideo)
			dispatch(setLoaderVideo(false))
		}

		if(isShow){
			videoRef.current.play()
			videoRef.current.addEventListener('ended', onEndedLoaderVideo)
		}

		return () => {
			videoRef.current.removeEventListener('ended', onEndedLoaderVideo)
		}
	}, [isShow])

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-logo" unmountOnExit>
			<div className="section-video">
				<div className="loader-video">
					<video ref={videoRef} id="loader-video" src={videoLogo} />
				</div>
			</div>
		</CSSTransition>
	)
}