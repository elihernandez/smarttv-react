import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import './styles.css'

export const Sidebar = () => {
	const [isShowText, setIsShowText] = useState(true)

	return (
		<div className="main-sidebar">
			<div className={`overlay ${isShowText ? 'show' : ''}`} />
			<div className="list">
				<div className="list-items">
					<div className="item active">
						<div className="icon-item">
							<i className="fas fa-home"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>Inicio</h1>
					</div>
					<div className="item">
						<div className="icon-item">
							<i className="fas fa-tv"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>En vivo</h1>
					</div>
					<div className="item">
						<div className="icon-item">
							<i className="fas fa-popcorn"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>A la carta</h1>
					</div>
					<div className="item">
						<div className="icon-item">
							<i className="fas fa-radio"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>Radio</h1>
					</div>
					<div className="item">
						<div className="icon-item">
							<i className="fas fa-headphones"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>Música</h1>
					</div>
					<div className="item">
						<div className="icon-item">
							<i className="fas fa-child"></i>
						</div>
						<h1 className={isShowText ? 'show' : ''}>Zona Kids</h1>
					</div>
				</div>
			</div>
		</div>
	)
}