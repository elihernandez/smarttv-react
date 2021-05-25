import React, { useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '../../../../components/Button/index'
import { FormLogin } from '../FormLogin'
import { Navigation } from '../../../../js/SpatialNavigation'
import './styles.css'

export function MainButtons(){
	const history = useHistory()
	const { url } = useRouteMatch()

	useEffect(() => {
		Navigation.add('input')
		Navigation.add('button')
		Navigation.focus('input')
	}, [url])

	const handleShowLoginForm = () => {
		history.replace('/login')
	}

	return (
		<div className="main-buttons-wrapper">
			<div className="main-buttons">
				<div className="container">
					{url == '/info' && (
						<Button type="button" onClick={handleShowLoginForm} uppercase={true} color="transparent outline" classes="btn-register body-3">Iniciar sesión</Button>	
					)}
					{url == '/login' && (
						<FormLogin />
					)}
				</div>
			</div>
		</div>
	)
}