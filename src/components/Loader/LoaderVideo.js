import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import videoLogo from '../../assets/videos/video-logo.mp4'

export const MemoizedLoaderVideo = () => {
	const videoRef = useRef(null)
	const isShow = useSelector(state => state.loader.isShowLoaderVideo)

	useEffect(() => {
		if(isShow){
			videoRef.current.play()
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