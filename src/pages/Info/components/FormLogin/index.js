import React, { useState, useContext, useEffect } from 'react'
import GlobalContext from '../../../../context/GlobalContext'
import TvDeviceContext from '../../../../context/TvDeviceContext'
import { Button } from '../../../../components/Button/index'
import { isKeyEnter } from '../../../../js/Keyboard'
import { getLogin } from '../../../../services/getLogin'
import { useUserSuscription } from '../../../../hooks/useUserSuscription'
import { encryptService } from '../../../../services/webosServices/encryptService'
import './styles.css'

export const FormLogin = () => {
	const [username, setUsername] = useState('')
	const [usernameLabel, setUsernameLabel] = useState('Correo electrónico')
	const [password, setPassword] = useState('')
	const [passwordLabel, setPasswordLabel] = useState('Password')
	const { globalState, globalDispatch } = useContext(GlobalContext)
	const { stateTvDevice } = useContext(TvDeviceContext)
	const [responseService, setResponseService] = useState(null)
	useUserSuscription(username, responseService)

	const onKeyDownInputUsername = (e) => {
		if((isKeyEnter(e)) && e.target.value !== ''){
			document.getElementById('password').focus()
		}
	}

	const onKeyDownInputPassword = (e) => {
		if((isKeyEnter(e)) && e.target.value !== ''){
			document.getElementById('button-login').focus()
		}
	}

	const dataIsValid = () => {
		if(username === ''){
			setUsernameLabel('Ingresa tu correo electrónico')
			document.getElementById('username').focus()
			return false
		}

		if(password === ''){
			setPasswordLabel('Ingresa tu contraseña')
			document.getElementById('password').focus()
			return false
		}
		
		return true
	}

	const handleSubmit = async(e) => {
		if(dataIsValid()){
			if(isKeyEnter(e)){
				try{
					globalDispatch({ type: 'setIsBackdrop', payload: true })
					globalDispatch({ type: 'setIsLoading', payload: true })
					const hashPassword = await encryptService(password, 10)
					const response = await getLogin(username, btoa(hashPassword), stateTvDevice)
					setResponseService(response)
				}catch(e){
					console.log(e)
					globalDispatch({ type: 'setIsLoading', payload: false })
					globalDispatch({ type: 'setIsErrorMessage', payload: true })
					globalDispatch({ type: 'setErrorMessage', payload: 'No se pudo iniciar sesión, vuelve a intentarlo.' })
					globalDispatch({ type: 'setTypeError', payload: 'password' })
				}
			}
		}
	}

	useEffect(() => {
		if(globalState.typeError === 'username'){
			document.getElementById('username').focus()
		}

		if(globalState.typeError === 'password'){
			document.getElementById('password').focus()
		}
	}, [globalState.isBackdrop])

	return (
		<div className="form-login">
			<div className="form-group">
				<p>{usernameLabel}</p>
				<input
					id="username"
					type="text"
					className="input-login"
					tabIndex="-1"
					value={username}
					autoFocus
					onKeyDown={(e) => onKeyDownInputUsername(e)}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<p>{passwordLabel}</p>
				<input
					id="password"
					type="password"
					className="input-login"
					tabIndex="-1"
					value={password}
					onKeyDown={(e) => onKeyDownInputPassword(e)}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button
				id="button-login"
				type="button"
				onKeyDown={(e) => handleSubmit(e)}
				onClick={(e) => handleSubmit(e)}
				uppercase={true}
				color="transparent outline"
				classes="btn-register body-3">
				Iniciar sesión
			</Button>	
		</div>
	)
}