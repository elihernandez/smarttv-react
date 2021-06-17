import React, { useState, useEffect, useRef, useContext } from 'react'
import * as ReactDOM from 'react-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'
import videoLogo from '../../assets/videos/video-logo.mp4'
import UserContext from '../../context/UserContext'
import './styles.css'

// export function LoaderSpinner({ color }) {
// 	const className = `loader-spinner ${color}`

// 	return (
// 		<div className="section-content">
// 			<div className={className}>
// 				<div className="spinner" />
// 			</div>
// 		</div>
// 	)
// }

export function MemoizedLoaderLogo({ isShow = false, color = 'purple' }) {
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

export const LoaderLogo = React.memo(MemoizedLoaderLogo)

export function MemoizedLoaderVideo({ isShow = true }) {
	const videoRef = useRef(null)

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

export const LoaderVideo = React.memo(MemoizedLoaderVideo)

export function LoaderLogoSpinner({ color }) {
	const imgSrc = `../src/assets/images/logos/guiahtv/guiahtv-logo-${color}.png`
	const className = `loader-logo-spinner ${color}`

	return (
		<div className="section-content">
			<div className="loader-logo">
				<img className="logo" src={imgSrc} alt="guiahtv-logo" />
			</div>
			<div className={className}>
				<div className="spinner" />
			</div>
		</div>
	)
}

export function LoaderSpinnerMUI({ text, placementText }) {
	const { stateUser } = useContext(UserContext)
	const { loading } = stateUser
	const classContent = placementText == ('top' || 'bottom') ? 'column' : 'row'

	return ReactDOM.createPortal(
		<CSSTransition in={loading} timeout={100} classNames="fade" unmountOnExit>
			<div className={`spinner-mui ${classContent}`}>
				<CircularProgress disableShrink />
				{text &&
					<p className="text-loading">{text}</p>
				}
			</div>
		</CSSTransition>,
		document.body
	)
}

export const MemoizedLoaderSpinner = ({ isShow }) => {
	console.log('Loader')
	// const [show, setShow] = useState(false)

	// useEffect(() => {
	// 	setShow(true)

	// 	return () => {
	// 		setShow(false)
	// 	}
	// }, [])

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

export const LoaderSpinner = React.memo(MemoizedLoaderSpinner)