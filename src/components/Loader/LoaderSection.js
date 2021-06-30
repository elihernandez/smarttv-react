import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CSSTransition } from 'react-transition-group'

export const MemoizedLoaderSection = ({ isShow }) => {
	console.log('Loader')

	return (
		<CSSTransition in={isShow} timeout={300} classNames="fade-150" unmountOnExit>
			<div className="loader-wrapper loader-section">
				<div className="spinner-mui">
					<CircularProgress disableShrink />
				</div>
			</div>
		</CSSTransition>
	)
}