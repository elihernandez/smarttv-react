import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './styles.css'

export function MemoizedNavbar({ isShow, navLinks, classNavbar, classItems, show = true, handleHide, handleShow }) {
	const navbarRef = useRef(null)
	const classItem = `navbar-link ${classItems}`
	const classNav = `navbar ${classNavbar}`
    
	return (
		<CSSTransition nodeRef={navbarRef} in={isShow} timeout={300} classNames="fade">
			<div className={classNav} ref={navbarRef}>
				<div className="section-wrapper">
					<ul className="navbar-list">
						{
							navLinks.map(({ title, href, icon, id }) => {
								return  <li key={title} className="navbar-item">
									<NavLink to={href} className={classItem} activeClassName="active" tabIndex="-1" id={id} onKeyDown={(e) => handleHide(e)} onFocus={handleShow}>
										{icon}
										<p>{title}</p>
									</NavLink>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		</CSSTransition>
	)
}

export const Navbar = React.memo(MemoizedNavbar)