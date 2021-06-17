import { useState, useEffect } from 'react'
import axios from '../js/Axios'
import { useDispatch, useSelector } from 'react-redux'
// import { ErrorMessage } from '../components/ErrorMessage'
import { validateSuscription } from '../js/Auth/validateSuscription'
import { getURL } from '../api/endpoints'

export function useAxios(section, sendRequest = true, params = {}){
	const dispatch = useDispatch()
	const stateUser = useSelector(state => state.user)
	const { userToken } = stateUser
	const [data, setData] = useState([])
	const [error, setError] = useState(false)
	const [count, setCount] = useState(0)

	const handleRequest = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		async function getData() {
			try {
				// setLoading(true)
				const url = getURL(section, userToken, params)
				const response = await axios.get(url)
				validateSuscription(response, dispatch)
				setData(response)
				// setLoading(false)
			} catch (error) {
				// console.log(error)
				// setLoading(false)
				// if(count != 3){
				// 	setError(1)
				//     //setError(errorMessage(onClickRequest))
				// }else{
				// 	setError(2)
				//     //setError(errorMessageTwo())
				// }
			}
		}

		if(count <= 3 && sendRequest){
			// setError(false)
			// setData([])
			getData()
		}
	}, [section, count, sendRequest])

	// return { loading, data, error, handleRequest }
	return { error, data }
}
