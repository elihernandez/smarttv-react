import React from 'react'
import { useSelector } from 'react-redux'
import { useAxios } from '../../../../../../hooks/useAxios'
import { setLoading, setData } from '../../../../../../redux/reducers/musicReducer'
import { SliderVertical } from '../SliderVertical'

export const Home = () => {
	const data = useSelector(state => state.music.data)

	useAxios({
		section: 'music-home',
		setLoading: setLoading,
		setData: setData
	})

	console.log('Home')

	if(data?.musicSections){
		return <SliderVertical data={data} />
	}

	return null
}