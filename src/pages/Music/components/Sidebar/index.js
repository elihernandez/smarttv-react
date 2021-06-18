import React, { useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarOpen, setSidebarLinkActive } from '../../../../redux/reducers/musicReducer'
import { Navigation } from '../../../../js/SpatialNavigation'
import { List } from './components/List'
import './styles.css'

export function SidebarMusic(){
	let history = useHistory()
	const { pathname } = history.location
	const dispatch = useDispatch()
	const isSidebarOpen = useSelector(state => state.music.isSidebarOpen)
	const [ links, setLinks ] = useState([])

	useEffect(() => {
		dispatch(setSidebarLinkActive('link-music-home'))
		Navigation.add('.link-sidebar-music', 'link-music-home', '#links-sidebar-music')
		Navigation.focus('#links-sidebar-music')

		setLinks([
			{
				listTitle: '',
				data: 
					[
						  { 
							url: pathname.includes('/musica/inicio') ? pathname : '/musica/inicio',
							icon: 'fas fa-home',
							title: 'Inicio',
							type: 'link',
							id: 'link-music-home',
						},
						{ 
							url: pathname.includes('/musica/busqueda') ? pathname : '/musica/busqueda',
							icon: 'fas fa-search',
							title: 'Búsqueda',
							type: 'link',
							id: 'link-music-search'
						},
						{ 
							url: pathname.includes('/musica/biblioteca') ? pathname : '/musica/biblioteca',
							icon: 'fas fa-books',
							title: 'Tu Biblioteca',
							type: 'link',
							id: 'link-music-library'
						},
						{ 
							url: pathname.includes('/musica/megusta') ? pathname : '/musica/megusta',
							icon: 'fas fa-heart',
							title: 'Tus me gusta',
							type: 'link',
							id: 'link-music-liked'
						},
						{ 
							url: pathname.includes('/musica/playlists') ? pathname : '/musica/playlists',
							icon: 'fas fa-list-music',
							title: 'Tus Playlists',
							type: 'link',
							id: 'link-music-playlists'
						}
					]
			}
		])

		return () => {
			Navigation.remove('#links-sidebar-music')
		}
	}, [])

	console.log(links)

	useEffect(() => {
		// const request = async() => {
		// 	try{
		// 		const response = await getMyPlaylists(stateUser)
		// 		const data = [{ 
		// 			handleClick: handleOpenModal,
		// 			icon: 'far fa-plus-circle',
		// 			title: 'Crear playlist',
		// 			type: 'button'
		// 		}]

		// 		if(response?.playLists){
		// 			response.playLists.map((playlist) => {
		// 				data.push({
		// 					regID: playlist.regID,
		// 					url: `${url}/playlist/${playlist.regID}`,
		// 					icon: null,
		// 					title: limitString(playlist.title, 25),
		// 					type: 'link'
		// 				})
		// 			})
		// 		}
		// 		dispatchMusic({ type: 'setMyPlaylists', payload: data })
		// 	}catch(e){
		// 		console.log(e)
		// 	}

		// 	Navigation.add('.list-item')			
		// }

		// request()
	}, [])

	// const handleOpenModal = useCallback(() => {
	// 	const modal = {
	// 		isModalActive: true,
	// 		data: {
	// 			name: '',
	// 			description: '',
	// 			isPublic: false
	// 		},
	// 		type: 'create'
	// 	}
	// 	dispatchMusic({ type: 'setModal', payload: modal })
	// }, [])

	return useMemo(() => {
		return (

			<div className={`sidebar sidebar-music ${isSidebarOpen ? 'open' : ''}`} onMouseLeave={() => dispatch(setSidebarOpen(false))}>
				{
					links.map(({ listTitle, data }) => {
						return <List key={listTitle} title={listTitle} data={data} />
					})
				}
			</div>
		)
	}, [isSidebarOpen, links])
}
