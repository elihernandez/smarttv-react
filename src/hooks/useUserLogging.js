import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'

export const useUserLogging = (username, response) => {
	const { dispatchUser } = useContext(UserContext)
    
	useEffect(() => {
		if(response){
			const { ResponseCode, SuscriberID } = response
			switch(ResponseCode) {
			case 0:
				// Suscripción expirada
				localStorage.setItem('_userLogged', username)
				localStorage.setItem('_userToken', SuscriberID)
				localStorage.setItem('_suscriptionStatus', ResponseCode)
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: SuscriberID })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})
				break
			case 1:
				// Suscripción válida
				localStorage.setItem('_userLogged', username)
				localStorage.setItem('_userToken', SuscriberID)
				localStorage.setItem('_suscriptionStatus', ResponseCode)
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: SuscriberID })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})    
				break
			case 2:
				// Suscripción periodo de gracia
				localStorage.setItem('_userLogged', username)
				localStorage.setItem('_userToken', SuscriberID)
				localStorage.setItem('_suscriptionStatus', ResponseCode)
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: SuscriberID })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})
				break
			case 3:
				// Suscripción gratuita
				localStorage.setItem('_userLogged', username)
				localStorage.setItem('_userToken', SuscriberID)
				localStorage.setItem('_suscriptionStatus', ResponseCode)
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: SuscriberID })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})
				break
			case 4:
				// Sesión no válida
				localStorage.removeItem('_userLogged')
				localStorage.removeItem('_userToken')
				localStorage.removeItem('_suscriptionStatus')
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: null })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})
				break
			default:
				break
			}
		}
	}, [response])
}