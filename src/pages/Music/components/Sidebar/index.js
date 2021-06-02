import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom'
import UserContext from '../../../../context/UserContext'
import MusicContext from '../../../../context/MusicContext'
import { getMyPlaylists } from '../../../../services/getMyPlaylists'
import { limitString } from '../../../../js/String'
import { Navigation } from '../../../../js/SpatialNavigation'
import { List } from './components/List'
import './styles.css'

export function MemoizedSidebarMusic(){
	const location = useLocation()
	const { url } = useRouteMatch()
	const { stateUser } = useContext(UserContext)
	const { dispatchMusic } = useContext(MusicContext)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [ links ] = useState([
		{
			listTitle: '',
			data: 
                [
                  	{ 
                		url: location.pathname.includes(`${url}/inicio`) ? location.pathname : `${url}/inicio`,
                		icon: 'fas fa-home',
                		title: 'Inicio',
                		type: 'link',
                		id: 'link-music-home',
                	},
                	{ 
                		url: location.pathname.includes(`${url}/busqueda`) ? location.pathname : `${url}/busqueda`,
                		icon: 'fas fa-search',
                		title: 'Búsqueda',
                		type: 'link',
                		id: 'link-music-search'
                	},
                	{ 
                		url: location.pathname.includes(`${url}/biblioteca`) ? location.pathname : `${url}/biblioteca`,
                		icon: 'fas fa-books',
                		title: 'Tu Biblioteca',
                		type: 'link',
                		id: 'link-music-library'
                	},
                	{ 
                		url: location.pathname.includes(`${url}/megusta`) ? location.pathname : `${url}/megusta`,
                		icon: 'fas fa-heart',
                		title: 'Tus me gusta',
                		type: 'link',
                		id: 'link-music-liked'
                	},
                	{ 
                		url: location.pathname.includes(`${url}/playlists`) ? location.pathname : `${url}/playlists`,
                		icon: 'fas fa-list-music',
                		title: 'Tus Playlists',
                		type: 'link',
                		id: 'link-music-playlists'
                	}
                ]
		}
	])

	useEffect(() => {
		const request = async() => {
			try{
				const response = await getMyPlaylists(stateUser)
				const data = [{ 
					handleClick: handleOpenModal,
					icon: 'far fa-plus-circle',
					title: 'Crear playlist',
					type: 'button'
				}]

				if(response?.playLists){
					response.playLists.map((playlist) => {
						data.push({
							regID: playlist.regID,
							url: `${url}/playlist/${playlist.regID}`,
							icon: null,
							title: limitString(playlist.title, 25),
							type: 'link'
						})
					})
				}
				dispatchMusic({ type: 'setMyPlaylists', payload: data })
			}catch(e){
				console.log(e)
			}

			Navigation.add('.list-item')			
		}

		request()
	}, [])

	const handleOpenModal = useCallback(() => {
		const modal = {
			isModalActive: true,
			data: {
				name: '',
				description: '',
				isPublic: false
			},
			type: 'create'
		}
		dispatchMusic({ type: 'setModal', payload: modal })
	}, [])

	const handleOpen = useCallback(() => {
		setIsSidebarOpen(true)
	}, []) 

	const handleClose = useCallback(() => {
		setIsSidebarOpen(false)
	}, []) 

	return (
		<div className={`sidebar sidebar-music ${isSidebarOpen ? 'open' : ''}`} onMouseLeave={handleClose}>
			{
				links.map(({ listTitle, data }) => {
					return <List key={listTitle} title={listTitle} data={data} handleCloseSidebar={handleClose} handleOpenSidebar={handleOpen} />
				})
			}
		</div>
	)
}

export const SidebarMusic = React.memo(MemoizedSidebarMusic)
