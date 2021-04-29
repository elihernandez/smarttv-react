import React from 'react'
import Logo from '../../components/Logo/index'
import { H1, H2 } from '../../components/Typography/index'
import { Footer } from '../../components/Footer/index'
import { LazyImage } from '../../components/Image'
import { Header } from './components/Header'
import { PlansPrices } from './components/Plans'
// import { AboutUs } from './components/AboutUs'
// import { Sections } from './components/Sections'
// import { Platforms } from './components/Platforms'
// import { Prices } from './components/Prices'
import backgroundHome from '../../assets/images/backgrounds/background-login.jpg'
import './styles.css'

export function Info() {

	return (
		<div className="wrapper-main-home">
			<Header />
			<div className="main-section">
				<div className="wrapper-background">
					<LazyImage img={backgroundHome} alt='Background contenido de app' type="jpg" recoverType="jpg" />
				</div>
				<div className="gradient-overlay" />
				<div className="main-info">
					<Logo color="purple" size="md" />
					<H1 className="title-text large-title-1">El mejor contenido espiritual y de valores reunidos en una sola plataforma para toda la familia.</H1>
					<H2 className="subtitle-text title-3">Disfruta en donde quieras, cancela cuando quieras.</H2>
					<PlansPrices />
				</div>
			</div>
			<Footer />
		</div>
	)

	// return (
	// 	<CSSTransition in={show} timeout={50} classNames="fade-50" unmountOnExit>
	// 		<div className="wrapper-main-home">
	// 			<Header />
	// 			<div className="main-section">
	// 				<div className="wrapper-background" />
	// 				<div className="gradient-overlay" />
	// 				<div className="main-info">
	// 					<Logo color="purple" size="md" />
	// 					<H1 className="title-text large-title-1">El mejor contenido espiritual y de valores reunidos en una sola plataforma para toda la familia.</H1>
	// 					<H2 className="subtitle-text title-2">Disfruta en donde quieras, cancela cuando quieras.</H2>
	// 					<PlansPrices />
	// 				</div>
	// 			</div>
	// 			<AboutUs />
	// 			<Sections />
	// 			<Platforms />
	// 			<Prices />
	// 			<Footer />
	// 		</div>
	// 	</CSSTransition>
	// )
}


// <ButtonUI type="button" className="primary uppercase btn-register title-3" text="Registrarme" />
// <H1 className="title-text large-title-1">Disfruta de la mejor plataforma de <br /> contenido exclusivo y espiritual para <br /> toda la familia.</H1>