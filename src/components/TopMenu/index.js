import React, { useEffect } from 'react'
import { LeftContent } from './LeftContent'
import { useSelector } from 'react-redux'
import { Navigation } from '../../js/SpatialNavigation'
import './styles.css'

const TopMenu = () => {
	const isShowTopMenu = useSelector(state => state.topMenu.isShowTopMenu)
	const isShowNavbar = useSelector(state => state.topMenu.isShowNavbar)
	
	useEffect(() => {
		Navigation.add('.navbar-link-top-menu', '', '#top-menu')
	}, [])

	return (
		<div id="top-menu" className='top-menu bggradient'>
			<div className='show-menu-wrapper'>
				<LeftContent />
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