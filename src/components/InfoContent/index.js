import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Background, ImgBackground } from './components/Background'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Title } from './components/Title'
import { Rating } from './components/Rating'
import { Description } from './components/Description'
import { Artist } from './components/Artist'
import { Director } from './components/Director'
import { isKeyEnter } from '../../js/Keyboard'
import { getProgressMovie } from '../../js/Time'
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
	const textButton = ResumePos == '' ? 'Ver ahora' : 'Reanudar'

	const handleClick = (e) => {
		if(isKeyEnter(e)){
			console.log('video')
			history.push({ pathname: `${history.location.pathname}/video`, state: { contentType: 'video', movieVod: data }})
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
					<Director artist={director} />
				}
				<div className="group-actions" id="movie-group-actions">
					<button type="button" className="button button-watch" onClick={handleClick} onKeyDown={handleClick} tabIndex="-1">
						<i className="fas fa-play" />{textButton}
						<div className="progress-bar-content">
							<LinearProgress variant="determinate" value={getProgressMovie(ResumePos, Length)} />
						</div>
					</button>
					<button type="button" className="button button-start" onClick={handleClick} onKeyDown={handleClick} tabIndex="-1">
						Desde el comienzo
					</button>
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
