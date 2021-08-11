import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../../../../hooks/useAxios'
import { setData } from '../../../../redux/reducers/vodReducer'
import { LoaderSection } from '../../../../components/Loader'
import { SliderVertical } from '../SliderVertical'

const Catalogue = () => {
	const dispatch = useDispatch()
	const { fetchData } = useAxios()
	const catalogue = useSelector(state => state.vod.data)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetchData({ section: 'catalogue-vod' })
			.then(response => {
				dispatch(setData(response))
			})
			.catch(error => {
				setError(error)
			})
	}, [])

	if(error){
		return error
	}
	
	return (
		<Fragment>
			{catalogue.length > 0 &&
				<SliderVertical data={catalogue} />
			}
			<LoaderSection />
		</Fragment>
	)
}

export default React.memo(Catalogue)