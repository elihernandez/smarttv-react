import React, { useContext } from 'react'
import { HashRouter } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { RouterLogged } from './components/RouterLogged'
import { RouterLoggedOut } from './components/RouterLoggedOut'

export function Router() {
	const { stateUser } = useContext(UserContext)

	return (
		<React.Fragment>
			<HashRouter>
				{stateUser?.userLogged && stateUser?.userToken ? (
					<RouterLogged />
				) : (
					<RouterLoggedOut />
				)}
			</HashRouter>
		</React.Fragment>
	)
}