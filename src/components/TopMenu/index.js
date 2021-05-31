import React, { useState, useEffect, useRef } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Navbar } from '../Navbar/index'
import { UserMenu } from '../UserMenu/index'
import Logo from '../Logo/index'
import { Navigation } from '../../js/SpatialNavigation'
// import { containsString } from '../../js/String'	
import './styles.css'

function LeftContent({showNavbar}) {
	const location = useLocation()
	const { pathname } = location
	const classItems = 'navbar-link-top-menu'
	const classNavbar = 'navbar-top-menu'
	
	const navLinks = [
		{ id: 'link-home', title: 'Inicio', href: '/inicio', icon: <i className="fas fa-home"></i> },
		{ id: 'link-tv', title: 'En vivo', href: pathname.includes('tv') ? location : '/tv', icon: <i className="fas fa-tv"></i> },
		{ id: 'link-vod', title: 'A la carta', href: '/alacarta', icon: <i className="fas fa-popcorn"></i> },
		{ id: 'link-radio', title: 'Radio', href: '/radio', icon: <i className="fas fa-radio"></i> },
		{ id: 'link-music', title: 'Musica', href: pathname.includes('musica') ? location : '/musica/inicio', icon: <i className="fas fa-headphones"></i> },
		{ id: 'link-kids', title: 'Zona kids', href: '/zonakids', icon: <i className="fas fa-child"></i> }
	]

	return (
		<div className="left-content">
			<Logo color="purple" size="sm" />
			<Navbar navLinks={navLinks} classNavbar={classNavbar} classItems={classItems} show={showNavbar} />
		</div>
	)
}

function RightContent() {
	return (
		<div className="right-content">
			<NavLink to='/busqueda' className="search-button" activeClassName="active">
				<span>
					Búsqueda &nbsp;&nbsp;<i className="fas fa-search"></i> 
				</span>
			</NavLink>
			
			<UserMenu />
		</div>
	)
}

export const TopMenu = () => {
	const location = useLocation()
	const topMenuRef = useRef(null)
	const { pathname } = location
	const [showLeftContent, setShowLeftContent] = useState(false)
	const [showRightContent, setShowRightContent] = useState(false)
	const [showNavbar, setShowNavbar] = useState(false)
	const [scroll, setScroll] = useState(0)

	const hideTopMenu = () => {
		setShowLeftContent(true)
		setShowNavbar(false)
		setShowRightContent(true)
	}

	const showTopMenu = () => {
		setShowLeftContent(true)
		setShowNavbar(true)
		setShowRightContent(true)
	}

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 25 && scroll == false) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		}
	}, [])

	useEffect(() => {
		switch(pathname){
		case '/perfiles':
			hideTopMenu()
			break
		case '/perfiles/editar':
			hideTopMenu()
			break
		default:
			showTopMenu()
			break
		}
	}, [pathname])

	useEffect(() => {
		Navigation.add('.navbar-link-top-menu')
	}, [])

	return (
		<div id="top-menu" className={`top-menu ${scroll ? 'bgcolor' : 'bggradient'}`} ref={topMenuRef}>
			<div className="section-wrapper">
				{	showLeftContent &&
					<LeftContent showNavbar={showNavbar}/>
				}
				{	showRightContent &&
					<RightContent />
				}
			</div>
		</div>
	)
}