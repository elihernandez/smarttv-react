import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../../../../hooks/useAxios'
import { setData } from '../../../../redux/reducers/vodReducer'
import { LoaderSpinner } from '../../../../components/Loader'
import { SliderVertical } from '../SliderVertical'

const Catalogue = () => {
	const dispatch = useDispatch()
	const { loading, count, fetchData } = useAxios()
	const [error, setError] = useState(null)
	const catalogue = useSelector(state => state.vod.data)

	useEffect(() => {
		setError(null)
		fetchData({ section: 'catalogue-vod' })
			.then(response => {
				dispatch(setData(response))
			})
			.catch(error => {
				setError(error)
			})
	}, [count])

	if(error){
		return error
	}
	
	return (
		<>
			{loading ? (
				<LoaderSpinner isShow={true} />
			) : (
				<>
					{catalogue.length > 0 && <SliderVertical data={catalogue} />}
				</>
			)}
		</>
	)
}

export default React.memo(Catalogue)