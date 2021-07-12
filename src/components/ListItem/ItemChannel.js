import React, { Fragment, useState, useContext, } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useDispatch } from 'react-redux'
import VideoContext from '../../context/VideoContext'
import { getContactInfo } from '../../services/getContactInfo'
import { isKeyDown, isKeyEnter, isKeyUp } from '../../js/Keyboard'
import { getProgressMovie, isLive, isEvent, getProgressTimeEvent, getEventTime } from '../../js/Time'
import {  limitString, isLimitString, replaceString, createUrlString, posterTypeSize } from '../../js/String'
import Tooltip from '@material-ui/core/Tooltip'
import LinearProgress from '@material-ui/core/LinearProgress'
import { LoaderSpinnerMUI } from '../Loader'
import imgRecoverErrorTV from '../../assets/images/backgrounds/onerror/error-tv.png'
import { Img } from './Img'
import { Title } from './Title'
import { Description } from './Description'
import './styles.css'

export const ItemChannel = ({ id, posterType, data }) => {
	// const { channelId } = useParams()
	// const { stateVideo = [] } = useContext(VideoContext)
	// const { loadingChannel = false, activeChannel = false} = stateVideo
	const className = posterTypeSize(1)
	const { Id, Name, Inicio, Fin, ContactID, Description: description, Registro, Poster, ResumePos, Length, ContentType } = data
	// const image = Poster ? Poster : HDPosterUrlLandscape
	// const urlId = Id ? Id : Registro
	// const urlNavLink = `/tv/${createUrlString(urlId)}`
	// const [contactInfo, setContactInfo] = useState([])
	// const [moreInfoActive, setMoreInfoActive] = useState(false)
	// const [readMoreActive, setReadMoreActive] = useState(false)

	return (
		<div className="item-link">
			<div id={id} className={`item-guide-livetv ${className}`} tabIndex="-1">
				
				<div className="background-item">
					<Img title={Name} posterType={1} imgPortrait={Poster} imgLandscape={Poster} imgError={imgRecoverErrorTV} />
					{/* {	urlId == channelId &&
						<StatusItem loading={loadingChannel} active={activeChannel}/>
					} */}
					{ResumePos &&
						<div className="progress-bar-content">
							<LinearProgress variant="determinate" value={getProgressMovie(ResumePos, Length)} />
						</div>
					}
				</div>
				<div className="info-item">
					<Title title={Name} />
					<Description description={description} limit={80} />
				</div>
				<ProgressTime type={ContentType} startTime={Inicio} EndTime={Fin} />
				<EventTimeContent type={ContentType} startTime={Inicio} EndTime={Fin} />
				{/* <ContactInfo moreInfoActive={moreInfoActive} contactInfo={contactInfo} setMoreInfoActive={setMoreInfoActive} />
				<ReadMore readMoreActive={readMoreActive} Name={Title} Description={Description} setReadMoreActive={setReadMoreActive} />
				<Buttons contactId={ContactID} description={Description} setContactInfo={setContactInfo} setMoreInfoActive={setMoreInfoActive} setReadMoreActive={setReadMoreActive} /> */}
			</div>
		</div>
	)
}

function ProgressTime({ type, startTime, EndTime }){
	if(!isEvent(type)){
		return null
	}

	return (
		<div className="progress-time-content" style={{ opacity: isLive(startTime, EndTime) ? '1' : '0'}}>
			<div className="progress-time-current" style={{ width: getProgressTimeEvent(startTime, EndTime) }}></div>
		</div>
	)
}

function EventTimeContent({ type, startTime, EndTime }){
	if(!isEvent(type)){
		return null
	}

	return (
		<div className="event-time-content">
			<p className="event-time-channel">
				<i className="far fa-clock"></i>{getEventTime(startTime, EndTime)}
			</p>
			{isLive(startTime, EndTime) &&
				<div className="button-live">EN VIVO</div>
			}
		</div>
	)
}

function StatusItem({ loading, active}){
	return (
		<div className="status-content">
			{	loading &&
				<LoaderSpinnerMUI />	
			}
			{	active &&
				<span className="icon-play-active">
					<i className="fad fa-pause-circle"></i>
				</span>	
			}
		</div>
	)
}

function Buttons({ contactId, description, setContactInfo, setMoreInfoActive, setReadMoreActive }) {
	const handleClickShowMoreInfo = (e) => {
		e.preventDefault()
		const getInfoContact = async () => {
			try {
				const data = await getContactInfo(contactId)
				setContactInfo(data)
				setMoreInfoActive(true)
			} catch (e) {

			}
		}

		getInfoContact()
	}

	const handleClickShowReadMore = (e) => {
		e.preventDefault()
		setReadMoreActive(true)
	}

	return (
		<div className="buttons-content">
			<Tooltip title="Más info" placement="top-start">
				<span tabIndex="0" onClick={handleClickShowMoreInfo}>
					<i className="fas fa-info" tabIndex="0" />
				</span>
			</Tooltip>

			{	isLimitString(description, 80) &&
				<Tooltip title="Leer más" placement="top-start">
					<span tabIndex="0" onClick={handleClickShowReadMore}>
						<i className="fas fa-ellipsis-h" tabIndex="0" />
					</span>
				</Tooltip>
			}
		</div>
	)
}

function ReadMore({ readMoreActive, Name, Description, setReadMoreActive }) {

	const handleClickHideReadMore = (e) => {
		e.preventDefault()
		setReadMoreActive(false)
	}

	return (
		<Fragment>
			{   readMoreActive
				? 	<CSSTransition in={readMoreActive} timeout={100} classNames="fade" unmountOnExit>
					<div className="contact-info-item" tabIndex="0">
						<div className="content-button-close" tabIndex="0">
							<span className="button-close" onClick={handleClickHideReadMore} tabIndex="0">
								<i className="fas fa-times" tabIndex="0" />
							</span>
						</div>
						<h2 className="title" tabIndex="0">{Name}</h2>
						<h3 className="description" tabIndex="0">{Description}</h3>
					</div>
				</CSSTransition>
				: 	null
			}
		</Fragment>
	)
}

function ContactInfo({ moreInfoActive, contactInfo, setMoreInfoActive }) {

	const handleClickHideMoreInfo = (e) => {
		e.preventDefault()
		setMoreInfoActive(false)
	}

     
	const handleClickWeb = () => {
		window.open(`https://${replaceString(contactInfo.ContactWeb, 'https://', '')}`, '_blank')
	}

	const handleClickFb = () => {
		window.open(`https://www.facebook.com/${contactInfo.ContactFb}`, '_blank')
	}

	const handleClickIg = () => {
		window.open(`https://www.instagram.com/${contactInfo.ContactIG}`, '_blank')
	}

	const handleClickTw = () => {
		window.open(`https://www.twitter.com/${contactInfo.ContactTw}`, '_blank')
	}

	const handleClickGm = () => {
		window.open(`https://www.google.com/maps/place/${replaceString(contactInfo.ContactLoc, ',', '+')}`, '_blank')
		// window.location = `https://www.google.com/maps/place/${replaceString(contactInfo.ContactLoc, ",", "+")}`
	}

	return (
		<Fragment>
			{     moreInfoActive
				? <CSSTransition in={moreInfoActive} timeout={100} classNames="fade" unmountOnExit>
					<div className="contact-info-item" tabIndex="0">
						<div className="content-button-close" tabIndex="0">
							<span className="button-close" onClick={handleClickHideMoreInfo} tabIndex="0">
								<i className="fas fa-times" tabIndex="0" />
							</span>
						</div>
						<h2 className="title" tabIndex="0">Información de {contactInfo.ContactTitle}</h2>
						<h3 className="description" tabIndex="0">{contactInfo.ContactDescription}</h3>
						{contactInfo.ContactFon &&
                                          <div className="content-phone" tabIndex="0">
                                          	<i className="fas fa-phone-alt" tabIndex="0"></i>
                                          	<p tabIndex="0">{contactInfo.ContactFon}</p>
                                          </div>
						}
						{contactInfo.ContactWeb &&
                                          <div className="content-web" tabIndex="0" onClick={handleClickWeb}>
                                          	<i className="fas fa-globe" tabIndex="0"></i>
                                          	<p tabIndex="0">{contactInfo.ContactWeb}</p>
                                          </div>
						}
						<div className="content-social-media" tabIndex="0">
							{contactInfo.ContactFb &&
                                                <span className="span-icon" tabIndex="0" onClick={handleClickFb}>
                                                	<i className="fab fa-facebook-square" tabIndex="0" />
                                                </span>
							}
							{contactInfo.ContactIG &&
                                                <span className="span-icon" tabIndex="0" onClick={handleClickIg}>
                                                	<i className="fab fa-instagram" tabIndex="0" />
                                                </span>
							}
							{contactInfo.ContactTw &&
                                                <span className="span-icon" tabIndex="0" onClick={handleClickTw}>
                                                	<i className="fab fa-twitter-square" tabIndex="0" />
                                                </span>
							}
							{contactInfo.ContactLoc &&
                                                <span className="span-icon" tabIndex="0" onClick={handleClickGm}>
                                                	<i className="fas fa-map-marker-alt" tabIndex="0" />
                                                </span>
							}
						</div>
					</div>
				</CSSTransition>
				: null
			}
		</Fragment>
	)
}