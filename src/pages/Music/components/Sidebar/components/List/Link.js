import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarOpen, setSidebarLinkActive } from '../../../../../../redux/reducers/musicReducer'
import { isKeyUp, isKeyEnter, isKeyRight } from '../../../../../../js/Keyboard'

export function Link({ data }) {
	let history = useHistory()
	const dispatch = useDispatch()
	const sidebarLinkActive = useSelector(state => state.music.sidebarLinkActive)
	const { title, url, icon, id } = data

	const handleClick = (e) => {
		if(e.nativeEvent.target.id === 'link-music-home' && isKeyUp(e)){
			document.getElementById('link-music').focus()
			dispatch(setSidebarOpen(false))
		}

		if(isKeyRight(e)){
			dispatch(setSidebarOpen(false))
		}

		if(isKeyEnter(e)){
			console.log('Hola')
			history.push(url)
			dispatch(setSidebarLinkActive(id))
			dispatch(setSidebarOpen(false))
		}
	}

	return (
		<div id={id}
			className={`link-sidebar-music ${sidebarLinkActive === id ? 'active' : ''}`}
			tabIndex="-1"
			onFocus={() => dispatch(setSidebarOpen(true))}
			onMouseOver={() => dispatch(setSidebarOpen(true))}
			onKeyDown={handleClick}
			onClick={handleClick}
		>
			{icon && (
				<i className={icon} />
			)}
			<p>{title}</p>
		</div>
	)
}