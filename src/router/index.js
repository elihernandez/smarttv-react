import React from 'react'
import { HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RouterLogged } from './components/RouterLogged'
import { RouterLoggedOut } from './components/RouterLoggedOut'

export function Router() {
	console.log('Router')
	const userState = useSelector(state => state.user)

	return (
		<HashRouter>
			{userState?.userLogged && userState?.userToken ? (
				<RouterLogged />
			) : (
				<RouterLoggedOut />
			)}
		</HashRouter>
	)
}
