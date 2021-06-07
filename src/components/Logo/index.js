import React from 'react'
import { NavLink } from 'react-router-dom'
import imgLogoBlue from '../../assets/images/logos/guiahtv/guiahtv-logo-blue.png'
import imgLogoPurple from '../../assets/images/logos/guiahtv/guiahtv-logo-purple.png'
import logoForeground from '../../assets/images/logos/guiahtv/logo_foreground.png'
import './styles.css'

export function MemoizedLogo({ color = 'purple', size = 'md', to = '/' }) {

	const listSrc = {
		'blue': imgLogoBlue,
		'purple': imgLogoPurple
	}

	return (
		<div className="logo-guiahtv">
			<MemoizedNavLink to={to} activeClassName="active">
				<img className={`img-logo ${size}`} src={listSrc[color] || imgLogoPurple} alt="logo-guiahtv" />
			</MemoizedNavLink>
		</div>
	)
}

export function IconLogo() {
	return (
		<div className="foreground-logo">
			<img src={logoForeground} alt="foreground-logo-guiahtv" />
		</div>
	)
}

export default React.memo(MemoizedLogo)
const MemoizedNavLink = React.memo(NavLink)