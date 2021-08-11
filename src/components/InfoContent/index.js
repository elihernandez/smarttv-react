import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Background, ImgBackground } from './components/Background'
import { Title } from './components/Title'
import { Rating } from './components/Rating'
import { Description } from './components/Description'
import { Artist } from './Artist'
import { Director } from './components/Director'
import { isKeyEnter } from '../../js/Keyboard'
import { minutesToHoursString } from '../../js/Time'
import { Navigation } from '../../js/SpatialNavigation'
import Imdb from '../../assets/images/clasifications-movies/imdb.png'
import './styles.css'

export function InfoMovie({ data }) {
	const history = useHistory()
	
	const { 
		HdBackgroundImageUrl,
		Title: title,
		Description: description,
		Categories,
		Artist: artist,
		Director: director,
		ReleaseDate,
		Length,
		Rating: rating,
		StarRating,
		ResumePos
	} = data 

	const lengthMovie = Length.replace(' min', '')
	const duration = lengthMovie * 60
	const timeElapsed = ResumePos / 1000
	const timeRemaining = duration - timeElapsed
	const time = (timeElapsed / duration) * 100

	const handleClick = (e, isContinue) => {
		e.preventDefault()
		if(isKeyEnter(e)){
			if(isContinue){
				data.ResumePos = 0
			}
			
			history.push({ 
				pathname: `${history.location.pathname}/video`, 
				state: { data }
			})
		}
	}

	useEffect(() => {
		Navigation.add('.button', '', '#movie-group-actions')
		Navigation.focus('#movie-group-actions')

		return () => {
			Navigation.remove('#movie-group-actions')
		}
	}, [])

	return (
		<Fragment>
			<Background>
				<ImgBackground title={title} img={HdBackgroundImageUrl} type="movie" />
			</Background>
			<div className="info-movie">
				<Title title={title} />
				<div className="group info">
					{StarRating && StarRating > 0 &&
						<Fragment>
							<img className="img-rating" src={Imdb} />
							<p className="rating">{StarRating}</p>
							<p className="rating">|</p>
						</Fragment>
					}
					{rating &&
						<Rating rating={rating} />
					}
					{ReleaseDate &&
                        <p className="release-date">{ReleaseDate}</p>
					}
					{Length &&
                        <p className="duration">{Length}</p>
					}
					{Categories &&
                        <p className="genre">{Categories}</p>
					}
				</div>
				{description &&
					<Description description={description} />
				}
				{artist &&
					<Artist artist={artist} />
				}
				{director &&
					<Director director={director} />
				}
				<div className="group-actions" id="movie-group-actions">
					{ResumePos !== '' && ResumePos !== 0 &&
						<div className="group-time-remaining">
							<div className="progress-wrapper">
								<div className="progress-elapsed" style={{ width: `${time}%` }} />
							</div>
							<p>Tiempo restante: &nbsp;{minutesToHoursString(timeRemaining)}</p>
						</div>
					}
					<div className="group-buttons">
						<button type="button" className="button button-watch" onClick={(e) => handleClick(e, false)} onKeyDown={(e) => handleClick(e, false)} tabIndex="-1">
							<i className="fas fa-play" />{ResumePos !== '' || ResumePos !== 0 ? 'Ver ahora' : 'Reanudar'}
						</button>
						{ResumePos !== '' && ResumePos !== 0 &&
							<button type="button" className="button button-start" onClick={(e) => handleClick(e, true)} onKeyDown={(e) => handleClick(e, true)} tabIndex="-1">
								Desde el comienzo
							</button>
						}
					</div>

				</div>
			</div>
		</Fragment>
	)
}

export function InfoSerie({ data }) {
	const {
		HdBackgroundImageUrl,
		Title: title,
		Description: description,
		Categories
	} = data

	return (
		<Fragment>
			<Background>
				<ImgBackground title={title} img={HdBackgroundImageUrl} type="serie" />
			</Background>
			<div className="info-serie">
				<Title title={title} />
				<div className="group info">
					{Categories &&
                        <p className="genre">{Categories}</p>
					}
				</div>
				{description &&
					<Description description={description} />
				}
			</div>
		</Fragment>
	)
}
