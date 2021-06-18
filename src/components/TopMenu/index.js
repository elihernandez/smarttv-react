import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar } from '../Navbar/index'
import { UserMenu } from '../UserMenu/index'
import Logo from '../Logo/index'
import { Navigation } from '../../js/SpatialNavigation'
import './styles.css'

const LeftContent = () => {
	const navLinks = [
		{ id: 'link-home', title: 'Inicio', href: '/inicio', icon: <i className="fas fa-home"></i> },
		// { id: 'link-tv', title: 'En vivo', href: pathname.includes('tv') ? location : '/tv', icon: <i className="fas fa-tv"></i> },
		{ id: 'link-tv', title: 'En vivo', href: '/envivo', icon: <i className="fas fa-tv"></i> },
		{ id: 'link-vod', title: 'A la carta', href: '/alacarta', icon: <i className="fas fa-popcorn"></i> },
		{ id: 'link-radio', title: 'Radio', href: '/radio', icon: <i className="fas fa-radio"></i> },
		// { id: 'link-music', title: 'Musica', href: pathname.includes('musica') ? location : '/musica/inicio', icon: <i className="fas fa-headphones"></i> },
		{ id: 'link-music', title: 'Musica', href: '/musica/inicio', icon: <i className="fas fa-headphones"></i> },
		{ id: 'link-kids', title: 'Zona kids', href: '/zonakids', icon: <i className="fas fa-child"></i> }
	]
	
	return (
		<div className='left-content'>
			<Logo color="purple" size="sm" />
			<Navbar navLinks={navLinks} />
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
			{/* <UserMenu /> */}
		</div>
	)
}

const TopMenu = () => {
	const isShowTopMenu = useSelector(state => state.topMenu.isShowTopMenu)
	const isShowNavbar = useSelector(state => state.topMenu.isShowNavbar)
	
	useEffect(() => {
		Navigation.add('.navbar-link-top-menu', '', '#top-menu')
	}, [])

	return (
		<div id="top-menu" className='top-menu bggradient'>
			<div className='show-menu-wrapper'>
				<MemoizedLeftContent />
				{/* <MemoizedRightContent isShow={isShowTopMenu} /> */}
			</div>
			<div className={`hide-menu-wrapper ${isShowTopMenu && !isShowNavbar ? 'show' : ''}`}>
				<div className="group-content">
					<i className="far fa-chevron-up"></i>
					<p>Menú</p>
				</div>
			</div>
		</div>
	)
}


export default React.memo(TopMenu)
const MemoizedLeftContent = React.memo(LeftContent)
const MemoizedRightContent = React.memo(RightContent)