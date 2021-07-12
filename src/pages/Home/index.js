import React from 'react'
import { Spotlight } from '../../components/Spotlight/index'
import { ButtonsMenu } from '../../components/ButtonsMenu/index'
import { useDidMount } from 'rooks'
import './styles.css'

const Home = () => {
	
	useDidMount(function () {
		setTimeout(() => {
			document.getElementById('link-home')?.focus()
		}, 10)
	})

	return (
		<div className="wrapper-home">
			{/* <Spotlight /> */}
			{/* <ButtonsMenu /> */}
		</div>
	)
}

export default Home