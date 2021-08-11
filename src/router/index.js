import React from 'react'
import { HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RouterLogged } from './components/RouterLogged'
import { RouterLoggedOut } from './components/RouterLoggedOut'

export function Router() {
	console.log('Router')
	const userLogged = useSelector(state => state.user.userLogged)
	const userToken = useSelector(state => state.user.userToken)
	const validSession =  userLogged && userToken

	return (
		<HashRouter>
			{validSession ? (
				<RouterLogged />
			) : (
				<RouterLoggedOut />
			)}
		</HashRouter>
	)
}
