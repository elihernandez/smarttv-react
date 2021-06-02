import React, { useContext } from 'react'
import { HashRouter } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { RouterLogged } from './components/RouterLogged'
import { RouterLoggedOut } from './components/RouterLoggedOut'
import { TopMenu } from '../components/TopMenu'

export function Router() {
	const { stateUser } = useContext(UserContext)

	return (
		<React.Fragment>
			<HashRouter>
				<TopMenu />
				{stateUser?.userLogged && stateUser?.userToken ? (
					<RouterLogged />
				) : (
					<RouterLoggedOut />
				)}
			</HashRouter>
		</React.Fragment>
	)
}