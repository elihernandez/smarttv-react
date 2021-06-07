import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { isKeyUp, isKeyEnter, isKeyRight } from '../../../../../../js/Keyboard'
import './styles.css'

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

function Link({ title, url, icon, id, handleCloseSidebar, handleOpenSidebar }) {
	let history = useHistory()

	const onKeyDown = (e) => {
		if(e.nativeEvent.target.id === 'link-music-home' && isKeyUp(e)){
			document.getElementById('link-music').focus()
			handleCloseSidebar()
		}

		if(isKeyRight(e)){
			handleCloseSidebar()
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

const MemoizedList = ({ title, data, handleCloseSidebar, handleOpenSidebar }) => {
	return (
		<div className="list-section">
			<h3 className="list-title">{title}</h3>
			<div className="list-menu">
				{data !== null &&
					data.map(({ title, url, handleClick, icon, type, id }) => {
						if(type === 'link'){
							return <Link key={title} title={title} url={url} icon={icon} id={id} handleCloseSidebar={handleCloseSidebar} handleOpenSidebar={handleOpenSidebar} />
						}else{
							return <Button key={title} title={title} handleClick={handleClick} icon={icon} />
						}
					})
				}
			</div>
		</div>
	)
}

export const List = React.memo(MemoizedList)