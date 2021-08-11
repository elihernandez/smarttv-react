import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

export const RightContent = ({ isShow }) => {
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