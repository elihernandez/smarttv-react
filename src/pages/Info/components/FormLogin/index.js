import React, { useState } from 'react'
import { Button } from '../../../../components/Button/index'
import { encryptString } from '../../../../js/Encrypt'

export const FormLogin = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async() => {
		const hashPassword = await encryptString(password, 10)
		console.log(password)
		console.log(hashPassword)
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
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button
				id="button-login"
				type="button"
				onClick={handleSubmit}
				uppercase={true}
				color="transparent outline"
				classes="btn-register body-3">
				Iniciar sesión
			</Button>	
		</div>
	)
}