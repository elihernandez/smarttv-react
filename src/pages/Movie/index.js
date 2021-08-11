import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'
import { Background, ImgBackground } from '../../components/InfoContent/Background'
import { Title } from '../../components/InfoContent/Title'
import { Rating } from '../../components/InfoContent/Rating'
import { Description } from '../../components/InfoContent/Description'
import { Artist } from '../../components/InfoContent/Artist'
import { Director } from '../../components/InfoContent/Director'
import { TimeRemaining } from '../../components/InfoContent/TimeRemaining'
import { ButtonWatch, ButtonStart } from '../../components/InfoContent/Buttons'
import { Navigation } from '../../js/SpatialNavigation'
import { isKeyEnter } from '../../js/Keyboard'
import { setMovie } from '../../redux/reducers/vodReducer'
import Imdb from '../../assets/images/clasifications-movies/imdb.png'
import '../../components/InfoContent/styles.css'

function MoviePage() {
	const dispatch = useDispatch()
	const movie = useSelector(state => state.vod.movie)
	const history = useHistory()
	const match = useRouteMatch()
	const { url } = match
	console.log('Movie Page')

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
	} = movie 

	const handleClick = (e, isContinue) => {
		e.preventDefault()
		if(isKeyEnter(e)){
			if(isContinue){
				const newMovie = Object.assign({}, movie)
				newMovie.ResumePos = 0
				dispatch(setMovie(newMovie))
			}
			
			history.push({ 
				pathname: `${url}/video`
			})
		}
	}
	
	useEffect(() => {
		Navigation.disable('#catalogue-vod')
		Navigation.disable('#top-menu')
		Navigation.add('.button', '', '#movie-group-actions')
		Navigation.focus('#movie-group-actions')
		// dispatch(setShowTopMenu(false))
		
		return () => {
			// dispatch(setShowTopMenu(true))
			Navigation.enable('#top-menu')
			Navigation.enable('#catalogue-vod')
			Navigation.focus('#catalogue-vod')
			Navigation.remove('#movie-group-actions')
		}
	}, [])

	return (
		<div className="movie-info info-wrapper">
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
					<TimeRemaining length={Length} resumePos={ResumePos} />
					<div className="group-buttons">
						<ButtonWatch resumePos={ResumePos} handleClick={handleClick} />
						<ButtonStart resumePos={ResumePos} handleClick={handleClick} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default React.memo(MoviePage)