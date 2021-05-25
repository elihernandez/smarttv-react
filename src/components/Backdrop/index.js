import React, { useContext } from 'react'
import * as ReactDOM from 'react-dom'
import GlobalContext from '../../context/GlobalContext'
import { CSSTransition } from 'react-transition-group'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ErrorMessage } from '../ErrorMessage'
import './styles.css'

export function Backdrop() {
	const { globalState } = useContext(GlobalContext)
	const { isBackdrop, isLoading, isErrorMessage, errorMessage } = globalState

	return ReactDOM.createPortal(
		<CSSTransition in={isBackdrop} timeout={100} classNames="fade" unmountOnExit>
			<div className="backdrop-content">
				<CSSTransition in={isLoading} timeout={100} classNames="fade" unmountOnExit>
					<div className="backdrop-spinner">
						<CircularProgress disableShrink />
					</div>
				</CSSTransition>
				<ErrorMessage show={isErrorMessage} message={errorMessage} />
			</div>
		</CSSTransition>,
		document.body
	)
}