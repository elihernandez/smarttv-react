import React from 'react'
import { useHistory } from 'react-router-dom'
import { isKeyEnter, isKeyDown } from '../../js/Keyboard'
import { setLinkActive, setShowNavbar } from '../../redux/reducers/topMenuReducer'
import { useDispatch, useSelector } from 'react-redux' 
import './styles.css'

const Link = ({ linkData }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const isShowNavbar = useSelector(state => state.topMenu.isShowNavbar)
	const linkActive = useSelector(state => state.topMenu.linkActive)
	const { title, href, icon, id } = linkData
    
	const handleClick = (e) => {
		if(isKeyDown(e)){
			dispatch(setShowNavbar(false))
		}

		if(isKeyEnter(e) && linkActive != id){
			history.push(href)
			dispatch(setLinkActive(id))

			if(id !== 'link-home'){
				dispatch(setShowNavbar(false))
			}
		}
	}

	const handleFocus = () => {
		if(!isShowNavbar){
			dispatch(setShowNavbar(true))
		}
	}

	return  <li key={title} className="navbar-item">
		<div to={href} className={`navbar-link navbar-link-top-menu ${linkActive === id ? 'active' : '' }`} tabIndex="-1" id={id} onClick={handleClick} onKeyDown={handleClick} onFocus={handleFocus}>
			{icon}
			<p>{title}</p>
		</div>
	</li>
}

function MemoizedNavbar({ navLinks }) {
	const isShowNavbar = useSelector(state => state.topMenu.isShowNavbar)

	return (
		<div className={`navbar ${isShowNavbar ? 'show' : ''} navbar-top-menu`}>
			<div className="section-wrapper">
				<ul className="navbar-list">
					{
						navLinks.map((linkData) => {
							return <Link key={linkData.id} linkData={linkData} />
						})
					}
				</ul>
			</div>
		</div>
	)
}

export const Navbar = React.memo(MemoizedNavbar)