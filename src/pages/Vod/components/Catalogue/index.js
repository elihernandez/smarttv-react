import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoaderSpinner } from '../../../../components/Loader'
import { SliderVertical } from '../SliderVertical'
import { useAxios } from '../../../../hooks/useAxios'
import { setLoading, setData } from '../../../../redux/reducers/vodReducer'

const Catalogue = () => {
	const dispatch = useDispatch()
	useAxios({
		section: 'catalogue-vod',
		setLoading: setLoading,
		setData: setData
	})

	const data = useSelector(state => state.vod.data)
	const isLoading = useSelector(state => state.vod.isLoading)
	console.log('Catalogue')

	useEffect(() => {
		
		return () => {
			dispatch(setData([]))
		}
	}, [])
	
	return (
		<Fragment>
			{data.length > 0 &&
				<SliderVertical data={data} />
			}
			<LoaderSpinner isShow={isLoading} />
		</Fragment>
	)
}

export default React.memo(Catalogue)