import React, { useState } from 'react'
import { Button } from '../../../../components/Button/index'
import { encryptString } from '../../../../js/Encrypt'
import { isKeyEnter } from '../../../../js/Keyboard'
import './styles.css'

export const FormLogin = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const onKeyDownButtonLogin = async(e) => {
		if(isKeyEnter(e)){
			const hashPassword = await encryptString(password, 10)
			console.log(password)
			console.log(hashPassword)
		}
	}

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

	return (
		<div className="form-login">
			<div className="form-group">
				<p>Correo electrónico</p>
				<input
					id="username"
					type="text"
					className="input-login"
					tabIndex="-1"
					value={username}
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
					onKeyDown={(e) => onKeyDownInputPassword(e)}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button
				id="button-login"
				type="button"
				onKeyDown={(e) => onKeyDownButtonLogin(e)}
				uppercase={true}
				color="transparent outline"
				classes="btn-register body-3">
				Iniciar sesión
			</Button>	
		</div>
	)
}