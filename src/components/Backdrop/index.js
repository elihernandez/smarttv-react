import React from 'react'
import * as ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ErrorMessage } from '../ErrorMessage'
import './styles.css'

export function Backdrop() {
	const backdropState = useSelector(state => state.backdrop)
	const { isShowBackdrop, isShowLoading, isShowErrorMessage, errorMessage } = backdropState

	return ReactDOM.createPortal(
		<CSSTransition in={isShowBackdrop} timeout={300} classNames="fade" unmountOnExit>
			<div className="backdrop-content">
				<CSSTransition in={isShowLoading} timeout={300} classNames="fade" unmountOnExit>
					<div className="backdrop-spinner">
						<CircularProgress disableShrink />
					</div>
				</CSSTransition>
				<ErrorMessage isShow={isShowErrorMessage} message={errorMessage} />
			</div>
		</CSSTransition>,
		document.body
	)
}