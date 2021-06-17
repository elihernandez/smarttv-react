import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowBackdrop, setShowLoading } from '../../../../redux/reducers/backdropReducer'
import { useUserSuscription } from '../../../../hooks/useUserSuscription'
import { encryptService } from '../../../../services/webosServices/encryptService'
import { getLogin } from '../../../../services/getLogin'
import { Button } from '../../../../components/Button/index'
import { isKeyEnter } from '../../../../js/Keyboard'
import './styles.css'

export const FormLogin = () => {
	const dispatch = useDispatch()
	const loaderState = useSelector(state => state.loader)
	const deviceState = useSelector(state => state.device)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [responseService, setResponseService] = useState(null)
	useUserSuscription(username, responseService)
	console.log(loaderState)
	
	const onKeyDownInputUsername = useCallback((e) => {
		if((isKeyEnter(e)) && e.target.value !== ''){
			document.getElementById('password').focus()
		}
	}, [])

	const onKeyDownInputPassword = useCallback((e) => {
		if((isKeyEnter(e)) && e.target.value !== ''){
			document.getElementById('button-login').focus()
		}
	}, [])

	const dataIsValid = useCallback(() => {
		if(username === ''){
			document.getElementById('username').focus()
			return false
		}

		if(password === ''){
			document.getElementById('password').focus()
			return false
		}
		
		return true
	}, [username, password])

	const handleSubmit = useCallback(async(e) => {
		if(dataIsValid()){
			if(isKeyEnter(e)){
				try{
					// globalDispatch({ type: 'setIsShowBackdrop', payload: true })
					// globalDispatch({ type: 'setIsShowLoading', payload: true })
					dispatch(setShowBackdrop(true))
					dispatch(setShowLoading(true))
					const hashPassword = await encryptService(password, 10)
					// console.log(hashPassword)
					const response = await getLogin(username, btoa(hashPassword), deviceState)
					setResponseService(response)
				}catch(e){
					console.log(e)
					// globalDispatch({ type: 'setIsShowLoading', payload: false })
					// globalDispatch({ type: 'setIsShowErrorMessage', payload: true })
					// globalDispatch({ type: 'setErrorMessage', payload: 'No se pudo iniciar sesión, vuelve a intentarlo.' })
					// globalDispatch({ type: 'setTypeError', payload: 'password' })
				}
			}
		}
	}, [username, password])

	// useEffect(() => {
	// 	if(globalState.typeError === 'username'){
	// 		document.getElementById('username').focus()
	// 	}

	// 	if(globalState.typeError === 'password'){
	// 		document.getElementById('password').focus()
	// 	}
	// }, [globalState.isBackdrop])

	return (
		<form className="form-login">
			<div className="form-group">
				<p>Correo electrónico</p>
				<input
					id="username"
					type="text"
					className="input-login"
					tabIndex="-1"
					value={username}
					autoFocus
					autoComplete="username"
					onKeyDown={(e) => onKeyDownInputUsername(e)}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<p>Contraseña</p>
				<input
					id="password"
					type="password"
					className="input-login"
					tabIndex="-1"
					value={password}
					autoComplete="current-password"
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
		</form>
	)
}