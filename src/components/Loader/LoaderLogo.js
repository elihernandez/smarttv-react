import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'

export const MemoizedLoaderLogo = ({ color = 'purple' }) => {
	const isShow = useSelector(state => state.loader.isShowLoaderLogo)
	const [isShowSpinner, setIsShowSpinner] = useState(false)
	const imgSrc = color === 'purple' ? imgLogoPurple : imgLogoBlue

	useEffect(() => {
		let timeout

		if(isShow){
			timeout = setTimeout(() => {
				setIsShowSpinner(true)
			}, 5000)
		}
		
		return () => {
			clearTimeout(timeout)
		}
	}, [isShow])

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-logo" unmountOnExit>
			<div className={`loader-logo fade ${isShow ? 'show' : 'hide'}`}>
				<img className="logo" src={imgSrc} alt="guiahtv-logo-purple" />
				<CSSTransition in={isShowSpinner} timeout={300} classNames="fade-150" unmountOnExit>
					<div className={`spinner-mui loader-logo fade ${isShow ? 'show' : 'hide'}`}>
						<CircularProgress disableShrink />
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>
	)
}

