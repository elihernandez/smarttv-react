import React, { useEffect } from 'react'
import { Spotlight } from '../../components/Spotlight/index'
import { ButtonsMenu } from '../../components/ButtonsMenu/index'
import { Navigation } from '../../js/SpatialNavigation'
import './styles.css'

export function Home() {

	useEffect(() => {
		Navigation.clear()
		Navigation.add('.navbar-link-top-menu')
		Navigation.focus('.navbar-link-top-menu')
		Navigation.add('.slick-slide')
	}, [])

	return (
		<div className="wrapper-home">
			<Spotlight />
			<ButtonsMenu />
		</div>
	)
}