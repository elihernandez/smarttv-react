import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import './styles.css'

export const Sidebar = () => {
	const [isShowText, setIsShowText] = useState(false)

	return (
		<div className="main-sidebar">
			<div className="list-items">
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-home"></i>
					</div>
					{isShowText ? 'Inicio' : ''}
				</div>
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-tv"></i>
					</div>
					{isShowText ? 'En vivo' : ''}
				</div>
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-popcorn"></i>
					</div>
					{isShowText ? 'A la carta' : ''}
				</div>
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-radio"></i>
					</div>
					{isShowText ? 'Radio' : ''}
				</div>
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-headphones"></i>
					</div>
					{isShowText ? 'Música' : ''}
				</div>
				<div className="item">
					<div className="icon-item">
						<i className="fas fa-child"></i>
					</div>
					{isShowText ? 'Zona Kids' : ''}
				</div>
			</div>
		</div>
	)
}