import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import * as ErrorComponent from '../components/ErrorMessage'
import { getURL } from '../api/endpoints'
import axios from '../js/Axios'
// import { setSuscriptionStatus } from '../redux/reducers/userReducer'

export function useAxios(){
	const userToken = useSelector(state => state.user.userToken)
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState(0)

	const retryRequest = () => {
		if(count <= 2){
			setCount(count + 1)
		}
	}

	const fetchData = useCallback(async ({ section, params = {} }) => {
		try{
			setLoading(true)
			const url = getURL(section, userToken, params)
			const response = await axios.get(url)
			const { data, suscriptionStatus } = response
			
			switch(suscriptionStatus){
			case 0: // 0 Suscripción expirada
				console.log('Suscripción expirada')
				break
			case 1:  // 1 Suscripción válida
				console.log('Suscripción válida')
				break
			case 2: // 2 Suscripción periodo de gracia
				console.log('Suscripción en periodo de gracia')
				break
			case 3: // 3 Suscripción gratuita
				console.log('Suscripción gratuita')
				break
			case 4: // 4 Sesión no válida
				throw new Error(1)
			default:
				console.log('No se envió suscripción')
			}

			setLoading(false)
			return data
		}catch(e){
			const code = parseInt(e.message)
			const listErrors = {
				0: 'No se pudo obtener la información, intente de nuevo.',
				1: 'Sesión no válida, favor de iniciar nueva sesión.',
				2: 'No se pudo obtener la información, intente de nuevo.',
				3: 'No se pudo obtener la información, intente de nuevo.',
				4: 'Hay un problema en la conexión a internet.',
				5: 'Hay un problema en la conexión a internet.',
				6: 'Hay un problema en la conexión a internet.',
			}

			const error = listErrors[code] || 'Error desconocido'
			setLoading(false)

			switch(code){
			case 0: // error del api
				throw(<ErrorComponent.ErrorMessage handleRequest={retryRequest} count={count} />)
			case 1: // error de sesión
				throw(<ErrorComponent.ErrorSession message={error} />)
			case 2: // error del cliente
			case 3: // error del servidor
			case 4: // network error
			case 5: // request aborted
			case 6: // timeout
				throw(<ErrorComponent.ErrorTimeout handleRequest={retryRequest} count={count} />)
			default: // error desconocido
				throw(<ErrorComponent.ErrorSession message={error} />)
			}
		}
	}, [count])

	return {
		loading,
		count,
		fetchData
	}
}


// export function useAxios({section = null, params = {}}){
// 	const history = useHistory()
// 	const dispatch = useDispatch()
// 	const userToken = useSelector(state => state.user.userToken)
// 	const [count, setCount] = useState(0)
// 	const [response, setResponse] = useState([])

// 	// eslint-disable-next-line no-unused-vars
// 	const handleRequest = () => {
// 		setCount(count + 1)
// 	}

// 	useEffect(() => {
// 		async function getData() {
// 			try {
// 				const url = getURL(section, userToken, params)
// 				const response = await axios.get(url)
// 				const { suscriptionStatus } = getSuscriptionStatus(response, dispatch)
		
// 				if(suscriptionStatus === 4){
// 					dispatch(setSuscriptionStatus(suscriptionStatus))
// 					localStorage.removeItem('_userLogged')
// 					localStorage.removeItem('_userToken')
// 					history.push('/login/info')
// 				}else{
// 					setResponse(response)
// 				}
// 			} catch (error) {
// 				// console.log(error)
// 				// setLoading(false)
// 				// if(count != 3){
// 				// 	setError(1)
// 				//     //setError(errorMessage(onClickRequest))
// 				// }else{
// 				// 	setError(2)
// 				//     //setError(errorMessageTwo())
// 				// }
// 			}
// 		}

// 		if(section && count <= 3){
// 			getData()
// 		}
// 	}, [section, count])

// 	return { response }
// }
