import React, { useState, useEffect, useCallback } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Navbar } from '../Navbar/index'
import { UserMenu } from '../UserMenu/index'
import Logo from '../Logo/index'
import { Navigation } from '../../js/SpatialNavigation'
import { isKeyDown } from '../../js/Keyboard'
import './styles.css'

const LeftContent = ({ isShow, handleHide, handleShow }) => {
	const classItems = 'navbar-link-top-menu'
	const classNavbar = 'navbar-top-menu'
	const [navLinks] = useState([
		{ id: 'link-home', title: 'Inicio', href: '/inicio', icon: <i className="fas fa-home"></i> },
		// { id: 'link-tv', title: 'En vivo', href: pathname.includes('tv') ? location : '/tv', icon: <i className="fas fa-tv"></i> },
		{ id: 'link-tv', title: 'En vivo', href: '/tv', icon: <i className="fas fa-tv"></i> },
		{ id: 'link-vod', title: 'A la carta', href: '/alacarta', icon: <i className="fas fa-popcorn"></i> },
		{ id: 'link-radio', title: 'Radio', href: '/radio', icon: <i className="fas fa-radio"></i> },
		// { id: 'link-music', title: 'Musica', href: pathname.includes('musica') ? location : '/musica/inicio', icon: <i className="fas fa-headphones"></i> },
		{ id: 'link-music', title: 'Musica', href: '/musica/inicio', icon: <i className="fas fa-headphones"></i> },
		{ id: 'link-kids', title: 'Zona kids', href: '/zonakids', icon: <i className="fas fa-child"></i> }
	]) 

	return (
		<div className='left-content'>
			<Logo color="purple" size="sm" />
			<Navbar isShow={isShow} navLinks={navLinks} classNavbar={classNavbar} classItems={classItems} handleHide={handleHide} handleShow={handleShow} />
		</div>
	)
}

const RightContent = ({ isShow }) => {
	return (
		<div className={`right-content ${isShow ? 'show' : ''}`}>
			<NavLink to='/busqueda' className="search-button" activeClassName="active">
				<span>
					Búsqueda &nbsp;&nbsp;<i className="fas fa-search"></i> 
				</span>
			</NavLink>
			<UserMenu />
		</div>
	)
}

const MemoizedTopMenu = () => {
	const { pathname } = useLocation()
	console.log(pathname)
	const [isShow, setIsShow] = useState(true)

	useEffect(() => {
		Navigation.add('.navbar-link-top-menu')
	}, [])

	const handleHide = useCallback((e) => {
		if(pathname !== '/inicio' && isKeyDown(e)){
			setIsShow(false)
		}
	}, [pathname])

	const handleShow = useCallback(() => {
		if(pathname !== '/inicio' ){
			setIsShow(true)
		}
	}, [pathname])

	return (
		<div id="top-menu" className='top-menu bggradient'>
			<div className='show-menu-wrapper'>
				<MemoizedLeftContent isShow={isShow} handleHide={handleHide} handleShow={handleShow} />
				<MemoizedRightContent isShow={isShow} />
			</div>
			<div className={`hide-menu-wrapper ${!isShow ? 'show' : ''}`}>
				<div className="group-content">
					<i className="far fa-chevron-up"></i>
					<p>Menú</p>
				</div>
			</div>
		</div>
	)
}


export const TopMenu = React.memo(MemoizedTopMenu)
const MemoizedLeftContent = React.memo(LeftContent)
const MemoizedRightContent = React.memo(RightContent)