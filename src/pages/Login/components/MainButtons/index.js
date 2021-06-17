import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../../../../components/Button/index'
import { FormLogin } from '../FormLogin'
import { Navigation } from '../../../../js/SpatialNavigation'
import './styles.css'

export function MainButtons(){
	let history = useHistory()
	let { type } = useParams()

	useEffect(() => {
		Navigation.add('input')
		Navigation.add('button')
		Navigation.focus('input')
	}, [type])

	const handleShowLoginForm = () => {
		history.replace('/login/form')
	}

	return (
		<div className="main-buttons-wrapper">
			<div className="main-buttons">
				<div className="container">
					{type == 'info' && (
						<Button type="button" onClick={handleShowLoginForm} uppercase={true} color="transparent outline" classes="btn-register body-3">Iniciar sesión</Button>	
					)}
					{type == 'form' && (
						<FormLogin />
					)}
				</div>
			</div>
		</div>
	)
}