import React, { Fragment } from 'react'
import { useAxios } from '../../../../../../hooks/useAxios'
import { SliderVertical } from '../SliderVertical'
import { LoaderSpinnerMUI } from '../../../../../../components/Loader'

export function Home(){
	const { loading, data } = useAxios('music-home')

	if(loading){
		return <LoaderSpinnerMUI />
	}

	if(data?.musicSections){
		return <SliderVertical data={data} />
	}

	return null
}
{/* <ListVertical sliderVerticalRef={sliderVerticalRef}>
	{
		data.musicSections.map((listData) => {
			return <ListHorizontal key={listData.title} listType={listData.contentType} description={listData.description} data={listData} sliderVerticalRef={sliderVerticalRef} />
		})
	}
</ListVertical> */}