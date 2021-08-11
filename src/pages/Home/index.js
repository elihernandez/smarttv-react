import React, { useState, useEffect } from 'react'
import Spotlight from './Spotlight'
import ButtonsMenu from './ButtonsMenu'
import { useAxios } from '../../hooks/useAxios'
import { LoaderSpinner } from '../../components/Loader'
// import { useDidMount } from 'rooks'
import './styles.css'

export default function HomePage() {
	const { loading, fetchData, count } = useAxios()
	const [error, setError] = useState(null)
	const [spotlightData, setSpotlightData] = useState([])
	const [buttonsMenuData, setButtonsMenu] = useState([])
	// useDidMount(function () {
	// 	setTimeout(() => {
	// 		document.getElementById('link-home')?.focus()
	// 	}, 10)
	// })

	// console.log(count)

	useEffect(() => {
		setError(null)
		// const fetchSpotlight = fetchData({ section: 'spotlight' })
		// const fetchButtonsMenu = fetchData({ section: 'buttons-menu' })
		// Promise.all([fetchSpotlight, fetchButtonsMenu])
		// 	.then(values => {
		// 		setSpotlightData(values[0])
		// 		setButtonsMenu(values[1])
		// 		console.log(values)
		// 	})
		// 	.catch(error => {
		// 		setError(error)
		// 	})
	}, [count])
	
	if(error){
		return error
	}
	
	return (
		<div className="wrapper-home">
			{loading && spotlightData.length === 0 && buttonsMenuData.length === 0 ? (
				<LoaderSpinner isShow={true} />
			) : (
				<>
					<Spotlight data={spotlightData} />
					<ButtonsMenu data={buttonsMenuData} />
				</>
			)}
		</div>
	)
}