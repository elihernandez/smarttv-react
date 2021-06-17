import React, { useRef, useState, useContext, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import VideoContext from '../../../../context/VideoContext'
import './styles.css'

export function Content({ children }) {
	const contentRef = useRef()
	const timerRef = useRef(null)
	const [isVisible, setIsVisible] = useState(true)
	const { videoState } = useContext(VideoContext)
	const { activeChannel } = videoState

	const fadeInContent = () => {
		setIsVisible(true)
		document.querySelector('.top-menu').style.opacity = 1
		document.body.style.cursor = ''
	}

	const fadeOutContent = () => {
		setIsVisible(false)
		document.querySelector('.top-menu').style.opacity = 0
		document.body.style.cursor = 'none'
	}

	const handleUserMouseMove = useCallback(() => {
		if (activeChannel) {
			clearTimeout(timerRef.current)
			timerRef.current = setTimeout(() => fadeOutContent(), 3000)
			fadeInContent()
		} else {
			clearTimeout(timerRef.current)
		}
	}, [activeChannel])

	const handleClick = (e) => {       
		if (e.target == document.querySelector('.background-overlay') ||
			e.target == document.querySelector('.info-channel-wrapper') ||
			e.target == document.querySelector('.info-channel') ||
			e.target == document.querySelector('.text-info') ||
			e.target == document.querySelector('.channel-name') ||
			e.target == document.querySelector('.navbar-list')
		){
			if (isVisible && activeChannel) {
				clearTimeout(timerRef.current)
				fadeOutContent()
			} else {
				clearTimeout(timerRef.current)
				timerRef.current = setTimeout(() => fadeOutContent(), 10000)
				fadeInContent()
			}
		}
	}

	useEffect(() => {
		handleUserMouseMove()
		document.addEventListener('mousemove', handleUserMouseMove)
		contentRef.current.addEventListener('click', handleClick)
            
		return () => {
			document.removeEventListener('mousemove', handleUserMouseMove)
			contentRef.current.removeEventListener('click', handleClick)
			clearTimeout(timerRef.current)
		}
	}, [handleUserMouseMove])

	return (
		<div className="content-tv" ref={contentRef}>
			<CSSTransition in={isVisible} timeout={300} classNames="fade" unmountOnExit>
				<div className="content-tv-wrapper">
					{children}
				</div>
			</CSSTransition>
		</div>
	)
}