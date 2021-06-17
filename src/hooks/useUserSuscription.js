import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/reducers/userReducer'
import * as backdropActions from '../redux/reducers/backdropReducer'

export const useUserSuscription = (username, response) => {
	const dispatch = useDispatch()

	const setCredentials = (ResponseCode, SuscriberID) => {
		localStorage.setItem('_userLogged', username)
		localStorage.setItem('_userToken', SuscriberID)
		localStorage.setItem('_suscriptionStatus', ResponseCode)
		dispatch(setUserData({
			userLogged: username,
			userToken: SuscriberID,
			suscriptionStatus: ResponseCode
		}))
		dispatch(backdropActions.setShowBackdrop(false))
	}
	
	const setErrorMessage = (message) => {
		dispatch(backdropActions.setShowLoading(false))
		dispatch(backdropActions.setShowErrorMessage(true))
		dispatch(backdropActions.setErrorMessage(message))
	}
    
	useEffect(() => {
		if(response){
			const { ResponseCode, SuscriberID } = response

			switch(ResponseCode) {
			case 0: // Ususario no encontrado
				setErrorMessage('No se encontró esta cuenta o nombre de usuario.')
				break
			case 1: // Suscripción expirada
				setCredentials(ResponseCode, SuscriberID)
				break
			case 2: // Suscripción válida
				setCredentials(ResponseCode, SuscriberID)
				break
			case 3: // Password incorrecta
				setErrorMessage('Nombre de usuario o contraseña incorrecta.')
				break
			case 4: // Suscripción periodo de gracia
				setCredentials(ResponseCode, SuscriberID)
				break
			case 5: // Suscripción gratuita
				setCredentials(ResponseCode, SuscriberID)
				break
			case 6: // Excede el límite de dispositivos permitidos
				setErrorMessage('Excede el límite de dispositivos permitidos.')
				break
			default: // Error desconocido
				setErrorMessage('No se pudo iniciar sesión, vuelve a intentarlo.')
				break
			}
		}
	}, [response])
}