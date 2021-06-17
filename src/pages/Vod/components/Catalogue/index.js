import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as vodActions from '../../../../redux/reducers/vodReducer'
import { LoaderSpinner } from '../../../../components/Loader'
import { SliderVertical } from '../SliderVertical'

export const MemoizedCatalogue = () => {
	const dispatch = useDispatch()
	const cmData = useSelector(state => state.vod.cmData)
	const isLoading = useSelector(state => state.vod.isLoading)
	const lastDateRequest = useSelector(state => state.vod.lastDateRequest)
	const userState = useSelector(state => state.user)
	console.log('Catalogue')

	useEffect(() => {
		dispatch(vodActions.getDataAPI(userState.userToken, lastDateRequest))
	}, [])
	
	return (
		<Fragment>
			<SliderVertical data={cmData} />
			<LoaderSpinner isShow={isLoading} />
		</Fragment>
	)
}

export const Catalogue = React.memo(MemoizedCatalogue)