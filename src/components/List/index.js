import React, { useRef } from 'react'
// import { Item } from '../ListItem'
import { SlickSliderVertical } from '../SlickCarousel'
import { ListCatalogue } from './components/ListType/Catalogue'
import { ListSeason } from './components/ListType/Season'
import { ListRadio } from './components/ListType/Radio'
import { ListChannel } from './components/ListType/Channel'
import { ListCollectionTracks } from './components/ListType/CollectionTracks'
import { ListPlaylists } from './components/ListType/Playlists'
import { ListAlbums } from './components/ListType/Albums'
import { ListTracksAlbum } from './components/ListType/TracksAlbum'
import { ListTracksPlaylist } from './components/ListType/TracksPlaylist'
import './styles.css'

export function List({ data, listType, wrap, indexList, tabValues }) {
	const listListType = {
		'catalogue':  <ListCatalogue data={data} listType={listType} wrap={wrap} />,
		'season': <ListSeason data={data} listType={listType} wrap={wrap} />,
		'radio': <ListRadio data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'channel': <ListChannel data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'tracks': <ListCollectionTracks data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'playlists': <ListPlaylists data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'myplaylists': <ListPlaylists data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'albums': <ListAlbums data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'tracksAlbum': <ListTracksAlbum data={data} listType='tracksAlbum' indexList={indexList} tabValues={tabValues} /> ,
		'tracksPlaylist': <ListTracksPlaylist data={data} listType='tracksPlaylist' indexList={indexList} tabValues={tabValues} />
	}

	return listListType[listType]
}

export const ListVertical = ({sliderVerticalRef, children}) => {
	return (
		<div className="list list-vertical music">
			<SlickSliderVertical sliderRef={sliderVerticalRef}>
				{children}
			</SlickSliderVertical>
		</div>
	)
}

export const ListHorizontal = (props) => {
	const {
		listType,
		data,
		wrap = false,
		indexList = 1,
		tabValues = 1,
		sliderVerticalRef
	} = props

	const listListType = {
		'catalogue':  <ListCatalogue data={data} listType={listType} wrap={wrap} />,
		'season': <ListSeason data={data} listType={listType} wrap={wrap} />,
		'radio': <ListRadio data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'channel': <ListChannel data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'tracks': <ListCollectionTracks data={data} listType={listType} indexList={indexList} tabValues={tabValues} sliderVerticalRef={sliderVerticalRef} />,
		'playlists': <ListPlaylists data={data} listType={listType} indexList={indexList} tabValues={tabValues} sliderVerticalRef={sliderVerticalRef} />,
		'myplaylists': <ListPlaylists data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'albums': <ListAlbums data={data} listType={listType} indexList={indexList} tabValues={tabValues} />,
		'tracksAlbum': <ListTracksAlbum data={data} listType='tracksAlbum' indexList={indexList} tabValues={tabValues} /> ,
		'tracksPlaylist': <ListTracksPlaylist data={data} listType='tracksPlaylist' indexList={indexList} tabValues={tabValues} />
	}

	return listListType[listType]

}

const getInitialSlide = (totalItems, slidesToShow, indexList, tabValues) => {
	let initialSlide = 0
	if(totalItems > slidesToShow){
		if(indexList === tabValues.tabContent){
			const slides = tabValues.initialSlide / slidesToShow
			initialSlide = slidesToShow * Math.trunc(slides)
		}
	}

	return initialSlide
}

// function getPages(cmData, maxItems) {
// 	let pages = cmData.length / maxItems

// 	if (pages % 1 != 0) {
// 		pages = Math.ceil(pages)
// 	}

// 	return pages
// }

// function DirectionsPage({ totalPages, refList }) {
// 	const [page, setPage] = useState(1)

// 	const handleClickPrev = () => {
// 		let moveP = 100 * (page - 2)
// 		cssTransition(refList.current, {
// 			transform: `translate3d(-${moveP}%, 0, 0)`
// 		}, 500, function () {
// 			setPage(page - 1)
// 		})
// 	}

// 	const handleClickRight = () => {
// 		let moveP = 100 * (page)
// 		cssTransition(refList.current, {
// 			transform: `translate3d(-${moveP}%, 0, 0)`
// 		}, 500, function () {
// 			setPage(page + 1)
// 		})
// 	}

// 	return (
// 		<Fragment>
// 			{
// 				totalPages > 1 && page > 1 &&
//                         <div className="direction direction-prev" onClick={handleClickPrev}>
//                         	<i className="fas fa-chevron-left" />
//                         </div>
// 			}
// 			{
// 				(totalPages > 1) && (page < totalPages) &&
//                         <div className="direction direction-next" onClick={handleClickRight}>
//                         	<i className="fas fa-chevron-right" />
//                         </div>
// 			}
// 		</Fragment>
// 	)
// }

// export function ListCards({ data, listType, listStyle }) {
// 	let pages = 0
// 	const [page, setPage] = useState(1)
// 	const [totalPages, setTotalPages] = useState(0)
// 	const { category, poster_type, cmData } = data
// 	const classes = poster_type == 0 ? 'list-cards portrait' : 'list-cards landscape'
// 	const refList = useRef()

// 	const handleClickPrev = () => {
// 		let moveP = 100 * (page - 2)
// 		cssTransition(refList.current, {
// 			transform: `translate3d(-${moveP}%, 0, 0)`
// 		}, 500, function () {
// 			setPage(page - 1)
// 		})
// 	}

// 	const handleClickRight = () => {
// 		let moveP = 100 * (page)
// 		cssTransition(refList.current, {
// 			transform: `translate3d(-${moveP}%, 0, 0)`
// 		}, 500, function () {
// 			setPage(page + 1)
// 		})
// 	}

// 	useEffect(() => {
// 		if (poster_type == 0) {
// 			pages = cmData.length / 7
// 		} else {
// 			pages = cmData.length / 5
// 		}

// 		if (pages % 1 != 0) {
// 			pages = Math.ceil(pages)
// 		}

// 		if (pages > 1) {
// 			setTotalPages(pages)
// 		}
// 	}, [])

// 	return (
// 		<div className={classes}>
// 			<div className="list-content">
// 				<div className="list-items" ref={refList}>
// 					{
// 						cmData.map((data) => {
// 							return <Item key={data.Registro} data={data} posterType={poster_type} listType={listType} />
// 						})
// 					}
// 				</div>
// 				{
// 					totalPages > 1 && page > 1 && listType != 'season' &&
//                               <div className="direction direction-prev" onClick={handleClickPrev}>
//                               	<i className="fas fa-chevron-left" />
//                               </div>
// 				}
// 				{
// 					(totalPages > 1) && (page < totalPages) && listType != 'season' &&
//                               <div className="direction direction-next" onClick={handleClickRight}>
//                               	<i className="fas fa-chevron-right" />
//                               </div>
// 				}
// 			</div>
// 		</div>
// 	)
// }

// export function ListCatalogue({ data, listType }) {
// 	const { category, poster_type, cmData } = data
// 	const totalPages = poster_type == 0 ? getPages(cmData, 7) : getPages(cmData, 5)
// 	const classes = poster_type == 0 ? 'list list-catalogue portrait' : 'list  list-catalogue landscape'
// 	const refList = useRef()

// 	return (
// 		<div className={classes}>
// 			<TitleList title={category} />
// 			<div className="list-content">
// 				<div className="list-items" ref={refList}>
// 					{
// 						cmData.map((data) => {
// 							return <Item key={data.Registro} data={data} posterType={poster_type} listType={listType} titleCategory={category} />
// 						})
// 					}
// 				</div>
// 				<DirectionsPage totalPages={totalPages} refList={refList} />
// 			</div>
// 		</div>
// 	)
// }