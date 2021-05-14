import React, { useState, useEffect, useRef } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'
import videoLogo from '../../assets/videos/Mi video.mp4'
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
						<div className="spinner-mui">
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
					<video ref={videoRef} src={videoLogo} />
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
	const [show, setShow] = useState(false)
	const classContent = placementText == ('top' || 'bottom') ? 'column' : 'row'

	useEffect(() => {
		setShow(true)
	}, [])

	return (
		<CSSTransition in={show} timeout={100} classNames="fade" unmountOnExit>
			<div className={`spinner-mui ${classContent}`}>
				<CircularProgress disableShrink />
				{text &&
					<p className="text-loading">{text}</p>
				}
			</div>
		</CSSTransition>
	)
}