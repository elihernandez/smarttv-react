import React, { Fragment, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { Button } from '../components/Button'

export const useUserLogging = (username, response) => {
	const { dispatchUser } = useContext(UserContext)
    
	useEffect(() => {
		if(response){
			const { ResponseCode, SuscriberID } = response
			switch (ResponseCode) {
			case 0: // Usuario no encontrado
				// setLoading(false)
				// setError(<p className="text-error">
				// 		No podemos encontrar una cuenta con esta dirección de email.
				// 		Reinténtalo o <Link className="link-error" href="https://guiah.tv/axs/registro">crea una cuenta nueva.</Link>
				// </p>)
				break
			case 1: // Suscripción expirada
			// setLoading(false)
			// setError(<p className="text-error">
			// 		No podemos encontrar una cuenta con esta dirección de email.
			// 		Reinténtalo o <Link className="link-error" href="https://guiah.tv/axs/registro">crea una cuenta nueva.</Link>
			// </p>)
				break
			case 2: // Usuario suscrito
				// Se guardan cookies de credenciales
				localStorage.setItem('_userLogged', username)
				localStorage.setItem('_userToken', SuscriberID)
				localStorage.setItem('_suscriptionStatus', ResponseCode)
				dispatchUser({ type: 'setUserLogged', payload: username })
				dispatchUser({ type: 'setUserToken', payload: SuscriberID })
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode})   
				break
			case 3: // Password incorrecta
				// setLoading(false)
				// setError(<p className="text-error">
				// 	<strong>Contraseña incorrecta.</strong>
				// 		&nbsp;Reinténtalo o <Link className="link-error" href="https://guiah.tv/axs/ForgotPassword">restablece la contraseña.</Link>
				// </p>)
				dispatchUser({ type: 'setSuscriptionStatus', payload: ResponseCode}) 
				dispatchUser({ type: 'setLoading', payload: false })
				dispatchUser({ type: 'setError', payload: true })
				dispatchUser({ type: 'setErrorMessage', payload:
					<Fragment><p>Contraseña incorrecta<br/> Vuelve a escribir tu contraseña</p></Fragment>
				})
				break
			case 4: // Suscripción en periodo de gracia
				break
			case 5: // Suscripción gratuita
				break
			case 6: // Excede límite de dispositivos permitidos
				// setLoading(false)
				// setError(<p className="text-error">
				// 		Excedes el límite de dispositivos permitidos. <Link className="link-error" href="https://guiah.tv/axs/Login">Revisa tu cuenta.</Link>
				// </p>)
				break
			default: // Error desconocido
				// setLoading(false)
				// setError(<p className="text-error">Ocurrió un problema inesperado. Vuelve a intentarlo.</p>)
				break
			}
		}
	}, [response])
}