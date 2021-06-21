import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { InfoSerie } from '../../components/InfoContent'
import { TabsContent } from './components/Tabs'
import { Navigation } from '../../js/SpatialNavigation'

const SeriePage = () => {
	console.log('Serie')
	const serie = useSelector(state => state.vod.serie)

	useEffect(() => {
		Navigation.disable('#catalogue-vod')
		
		return () => {
			Navigation.enable('#catalogue-vod')
			Navigation.focus('#catalogue-vod')
		}
	}, [])

	return (
		<div className="serie-info info-wrapper">
			<InfoSerie data={serie}/>
			{/* <TabsContent serieId={serie.ContentTypeOrder} contactId={serie.ContactID} /> */}
		</div>
	)
}

export default React.memo(SeriePage)