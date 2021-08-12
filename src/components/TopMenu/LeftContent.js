import React from 'react'
import { Navbar } from '../Navbar/index'
import Logo, { IconLogo } from '../Logo/index'
import './styles.css'

export const LeftContent = () => {
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
			<Logo color="purple" size="md" />
			{/* <Navbar navLinks={navLinks} /> */}
		</div>
	)
}