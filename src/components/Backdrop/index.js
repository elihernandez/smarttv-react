import React, { useContext } from 'react'
import * as ReactDOM from 'react-dom'
import GlobalContext from '../../context/GlobalContext'
import { CSSTransition } from 'react-transition-group'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ErrorMessage } from '../ErrorMessage'
import './styles.css'

export function Backdrop() {
	const { globalState } = useContext(GlobalContext)
	const { isShowBackdrop, isShowLoading, isShowErrorMessage, errorMessage } = globalState

	return ReactDOM.createPortal(
		<CSSTransition in={isShowBackdrop} timeout={100} classNames="fade" unmountOnExit>
			<div className="backdrop-content">
				<CSSTransition in={isShowLoading} timeout={100} classNames="fade" unmountOnExit>
					<div className="backdrop-spinner">
						<CircularProgress disableShrink />
					</div>
				</CSSTransition>
				<ErrorMessage show={isShowErrorMessage} message={errorMessage} />
			</div>
		</CSSTransition>,
		document.body
	)
}