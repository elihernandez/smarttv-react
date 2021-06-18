import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../js/Axios'
import { getURL } from '../api/endpoints'
// import { ErrorMessage } from '../components/ErrorMessage'
import { validateSuscription } from '../js/Auth/validateSuscription'

export function useAxios({section = null, setLoading = null, setData = null, params = {}}){
	const dispatch = useDispatch()
	const userToken = useSelector(state => state.user.userToken)
	const [count, setCount] = useState(0)

	const handleRequest = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		async function getData() {
			try {
				dispatch(setLoading(true))
				const url = getURL(section, userToken, params)
				const response = await axios.get(url)
				validateSuscription(response, dispatch)
				dispatch(setData(response))
				setTimeout(() => dispatch(setLoading(false)), 2000)
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

		if(section && count <= 3){
			getData()
		}
	}, [section, count])

	return { handleRequest }
}
