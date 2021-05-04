import React, { useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '../../../../components/Button/index'
import { FormLogin } from '../FormLogin'

import './styles.css'

export function PlansPrices(){
	const history = useHistory()
	const { url } = useRouteMatch()

	useEffect(() => {
		SpatialNavigation.focus()
	}, [url])

	const handleShowLoginForm = () => {
		history.replace('/login')
	}

	return (
		<div className="plans-prices-wrapper">
			<div className="plans">
				<div className="card-plan price-month">
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