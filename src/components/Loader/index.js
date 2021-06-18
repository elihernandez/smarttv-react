import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'
import videoLogo from '../../assets/videos/video-logo.mp4'
import './styles.css'

export function MemoizedLoaderLogo({ color = 'purple' }) {
	const isShow = useSelector(state => state.loader.isShowLoaderLogo)
	const [showSpinner, setShowSpinner] = useState(false)
	const imgSrc = color === 'purple' ? imgLogoPurple : imgLogoBlue

	useEffect(() => {
		let timeout

		if(isShow){
			timeout = setTimeout(() => {
				setShowSpinner(true)
			}, 5000)
		}
		
		return () => {
			clearTimeout(timeout)
		}
	}, [isShow])

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-logo" unmountOnExit>
			<div className="loader-logo">
				<img className="logo" src={imgSrc} alt="guiahtv-logo-purple" />
				<CSSTransition in={showSpinner} timeout={300} classNames="fade-150" unmountOnExit>
					<div className="spinner-mui loader-logo ">
						<CircularProgress disableShrink />
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>
	)
}

export function MemoizedLoaderVideo() {
	const videoRef = useRef(null)
	const isShow = useSelector(state => state.loader.isShowLoaderVideo)

	useEffect(() => {
		if(isShow){
			videoRef.current.play()
		}
	}, [isShow])

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-150" unmountOnExit>
			<div className="section-video">
				<div className="loader-video">
					<video ref={videoRef} id="loader-video" src={videoLogo} />
				</div>
			</div>
		</CSSTransition>
	)
}

export const MemoizedLoaderSpinner = ({ isShow }) => {
	console.log('Loader')

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-150" unmountOnExit>
			<div className="loader-wrapper">
				<div className="spinner-mui">
					<CircularProgress disableShrink />
				</div>
			</div>
		</CSSTransition>
	)
}

export const LoaderLogo = React.memo(MemoizedLoaderLogo)
export const LoaderVideo = React.memo(MemoizedLoaderVideo)
export const LoaderSpinner = React.memo(MemoizedLoaderSpinner)