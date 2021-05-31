import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useRouteMatch, useLocation } from 'react-router-dom'
import UserContext from '../../../../context/UserContext'
import MusicContext from '../../../../context/MusicContext'
import { getMyPlaylists } from '../../../../services/getMyPlaylists'
// import { Sidebar } from '../../../../components/Sidebar'
import { limitString } from '../../../../js/String'
import { Navigation } from '../../../../js/SpatialNavigation'
import { isKeyUp, isKeyEnter } from '../../../../js/Keyboard'
import './styles.css'

export function SidebarMusic(){
	const location = useLocation()
	const { url } = useRouteMatch()
	const { stateUser } = useContext(UserContext)
	const { stateMusic, dispatchMusic } = useContext(MusicContext)
	const { isSidebarOpen } = stateMusic
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

	const handleCloseSidebar = useCallback(() => {
		dispatchMusic({ type: 'setIsSidebarOpen', payload: false })
	}, []) 

	return (
		<div className={`sidebar sidebar-music ${isSidebarOpen ? 'open' : ''}`} onMouseLeave={handleCloseSidebar}>
			{
				links.map(({ listTitle, data }) => {
					return <MemoizedList key={listTitle} title={listTitle} data={data} />
				})
			}
		</div>
	)
}

function Button({ title, handleClick, icon }) {
	return (
		<li className="list-item" onClick={handleClick} tabIndex="-1">
			{icon && (
				<i className={icon} />
			)}
			<p>{title}</p>
		</li>
	)
}

function Link({ title, url, icon, id }) {
	let history = useHistory()
	const { dispatchMusic } = useContext(MusicContext)

	const handleOpenSidebar = () => {
		dispatchMusic({ type: 'setIsSidebarOpen', payload: true })
	}

	const handleCloseSidebar = () => {
		dispatchMusic({ type: 'setIsSidebarOpen', payload: false })
	}

	const onKeyDown = (e) => {
		if(e.nativeEvent.target.id === 'link-music-home' && isKeyUp(e)){
			document.getElementById('link-music').focus()
		}

		if(isKeyEnter(e)){
			history.push(url)
		}
	}

	return (
		<NavLink
			to={url}
			activeClassName="active"
		>
			<li
				id={id}
				className="list-item"
				tabIndex="-1"
				onFocus={handleOpenSidebar}
				onBlur={handleCloseSidebar}
				onMouseOver={handleOpenSidebar}
				onKeyDown={onKeyDown}
			>
				{icon && (
					<i className={icon} />
				)}
				<p>{title}</p>
			</li>
		</NavLink>
	)
}

const List = ({ title, data }) => {
	console.log('Hola 2')
	return (
		<div className="list-section">
			<h3 className="list-title">{title}</h3>
			<ul className="list-menu">
				{data !== null &&
					data.map(({ title, url, handleClick, icon, type, id }) => {
						if(type === 'link'){
							return <Link key={title} title={title} url={url} icon={icon} id={id} />
						}else{
							return <Button key={title} title={title} handleClick={handleClick} icon={icon} />
						}
					})
				}
			</ul>
		</div>
	)
}

const MemoizedList = React.memo(List)