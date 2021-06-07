import React from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './styles.css'

function MemoizedNavbar({ isShow, navLinks, classNavbar, classItems, show = true, handleHide, handleShow }) {
    
	return (
		// <CSSTransition in={isShow} timeout={300} classNames="fade">
		<div className={`navbar ${isShow ? 'show' : ''} ${classNavbar}`}>
			<div className="section-wrapper">
				<ul className="navbar-list">
					{
						navLinks.map(({ title, href, icon, id }) => {
							return  <li key={title} className="navbar-item">
								<MemoizedNavLink to={href} className={`navbar-link ${classItems}`} activeClassName="active" tabIndex="-1" id={id} onKeyDown={(e) => handleHide(e)} onFocus={handleShow}>
									{icon}
									<p>{title}</p>
								</MemoizedNavLink>
							</li>
						})
					}
				</ul>
			</div>
		</div>
		// </CSSTransition>
	)
}

const MemoizedNavLink = React.memo(NavLink)
export const Navbar = React.memo(MemoizedNavbar)