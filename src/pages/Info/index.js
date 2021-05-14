import React from 'react'
import Logo from '../../components/Logo/index'
import { H1, H2 } from '../../components/Typography/index'
import { LazyImage } from '../../components/Image'
import { MainButtons } from './components/MainButtons'
import { Footer } from './components/Footer'
import backgroundHome from '../../assets/images/backgrounds/background-login.jpg'
import './styles.css'

export const Info = () => {
	return (
		<div className="wrapper-main-home">
			<div className="main-section">
				<div className="wrapper-background">
					<LazyImage img={backgroundHome} alt='Background contenido de app' type="jpg" recoverType="jpg" />
				</div>
				<div className="main-info">
					<div>
						<Logo color="purple" size="md" to="#" />
					</div>
					<div>
						<H1 className="title-text large-title-1">El mejor contenido espiritual y de valores reunidos en una sola plataforma para toda la familia.</H1>
						<H2 className="subtitle-text title-3">Disfruta en donde quieras, cancela cuando quieras.</H2>
						<MainButtons />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}