import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import GlobalContext from '../context/GlobalContext'

export const useUserSuscription = (username, response) => {
	const { dispatchUser } = useContext(UserContext)
	const { globalDispatch } = useContext(GlobalContext)

	const setCredentials = (ResponseCode, SuscriberID) => {
		localStorage.setItem('_userLogged', username)
		localStorage.setItem('_userToken', SuscriberID)
		localStorage.setItem('_suscriptionStatus', ResponseCode)
		dispatchUser({ type: 'setUserLogged', payload: username })
		dispatchUser({ type: 'setUserToken', payload: SuscriberID })
		dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})
		globalDispatch({ type: 'setIsShowBackdrop', payload: false })
	}

	const setErrorMessage = (message) => {
		globalDispatch({ type: 'setIsShowLoading', payload: false })
		globalDispatch({ type: 'setIsShowErrorMessage', payload: true })
		globalDispatch({ type: 'setErrorMessage', payload: message })
	}
    
	useEffect(() => {
		if(response){
			const { ResponseCode, SuscriberID } = response

			switch(ResponseCode) {
			case 0: // Ususario no encontrado
				setErrorMessage('No se encontró esta cuenta o nombre de usuario.')
				globalDispatch({ type: 'setTypeError', payload: 'username' })
				break
			case 1: // Suscripción expirada
				setCredentials(ResponseCode, SuscriberID)
				break
			case 2: // Suscripción válida
				setCredentials(ResponseCode, SuscriberID)
				break
			case 3: // Password incorrecta
				setErrorMessage('Contraseña incorrecta.')
				globalDispatch({ type: 'setTypeError', payload: 'password' })
				break
			case 4: // Suscripción periodo de gracia
				setCredentials(ResponseCode, SuscriberID)
				break
			case 5: // Suscripción gratuita
				setCredentials(ResponseCode, SuscriberID)
				break
			case 6: // Excede el límite de dispositivos permitidos
				setErrorMessage('Excede el límite de dispositivos permitidos.')
				globalDispatch({ type: 'setTypeError', payload: 'username' })
				break
			default: // Error desconocido
				setErrorMessage('No se pudo iniciar sesión, vuelve a intentarlo.')
				globalDispatch({ type: 'setTypeError', payload: 'username' })
				break
			}
		}
	}, [response])
}