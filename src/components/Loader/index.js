import React, { useState, useEffect, useRef, useContext } from 'react'
import * as ReactDOM from 'react-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'
import videoLogo from '../../assets/videos/video-logo.mp4'
import UserContext from '../../context/UserContext'
import './styles.css'

export function LoaderSpinner({ color }) {
	const className = `loader-spinner ${color}`

	return (
		<div className="section-content">
			<div className={className}>
				<div className="spinner" />
			</div>
		</div>
	)
}

export function LoaderLogo({show = true, color = 'purple' }) {
	const [showSpinner, setShowSpinner] = useState(false)
	const imgSrc = color === 'purple' ? imgLogoPurple : imgLogoBlue

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowSpinner(true)
		}, 8000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<CSSTransition in={show} timeout={100} classNames="fade" unmountOnExit>
			<div className="section-content">
				<div className="loader-logo">
					<img className="logo" src={imgSrc} alt="guiahtv-logo-purple" />
					<CSSTransition in={showSpinner} timeout={100} classNames="fade" unmountOnExit>
						<div className="spinner-mui loader-logo ">
							<CircularProgress disableShrink />
						</div>
					</CSSTransition>
				</div>
			</div>
		</CSSTransition>
	)
}

export function LoaderVideo({ show = true }) {
	const videoRef = useRef(null)

	useEffect(() => {
		videoRef.current.play()
	}, [])

	return (
		<CSSTransition in={show} timeout={100} classNames="fade" unmountOnExit>
			<div className="section-video">
				<div className="loader-video">
					<video ref={videoRef} id="loader-video" src={videoLogo} />
				</div>
			</div>
		</CSSTransition>
	)
}

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