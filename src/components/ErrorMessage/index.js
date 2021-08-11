import React, { useRef, useState, useEffect } from 'react'
import { useInterval } from 'rooks'
import { CSSTransition } from 'react-transition-group'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { setShowBackdrop } from '../../redux/reducers/backdropReducer'
import { setUserData } from '../../redux/reducers/userReducer'
import { colors } from '../../styles/styles'

export const ErrorSession = ({ message }) => {
	const dispatch = useDispatch()
	const buttonRef = useRef(null)
	const history = useHistory()

	useEffect(() => {
		if(buttonRef?.current){
			buttonRef.current.focus()
		}
	}, [])

	const handleClick = () => {
		dispatch(setUserData({
			userLogged: null,
			userToken: null,
			suscriptionStatus: null
		}))

		history.push('/login/info')
		localStorage.removeItem('_userLogged')
		localStorage.removeItem('_userToken')
		localStorage.removeItem('_suscriptionStatus')
	}
    
	return (
		<CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
			<Container>
				<ErrorWrapper>
					<ErrorText>
						{ message }
					</ErrorText>
					<BackButton
						ref={buttonRef}
						tabIndex='-1'
						onClick={handleClick}
						onKeyDown={handleClick}>
                        Iniciar sesión
					</BackButton>
				</ErrorWrapper>
			</Container>
		</CSSTransition>
	)
}

export const ErrorTimeout = () => {
	const buttonRef = useRef(null)
	const [time, setTime] = useState(30)

	const { start } = useInterval(() => {
		if(time === 0){
			handleClick()
		}else{
			setTime((e) => e - 1)
		}
	}, 1000)

	useEffect(() => {
		if(buttonRef?.current){
			start()
			buttonRef.current.focus()
		}
	}, [])

	const handleClick = () => {
		
	}
    
	return (
		<CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
			<Container>
				<ErrorWrapper>
					<ErrorText>
						No se pudo establecer la conexión.
					</ErrorText>
					<ErrorSubText>
						Se intentará reestablecer la conexión en: {time} segundos
					</ErrorSubText>
					<BackButton
						ref={buttonRef}
						tabIndex='-1'
						onClick={handleClick}
						onKeyDown={handleClick}>
                        Reintentar
					</BackButton>
				</ErrorWrapper>
			</Container>
		</CSSTransition>
	)
}

export const ErrorMessage = ({ handleRequest, count }) => {
	const buttonRef = useRef(null)
	const times = { 0: 30, 1: 45, 2: 60 }
	const [time, setTime] = useState(times[count])

	const { start } = useInterval(() => {
		if(time === 0){
			handleClick()
		}else{
			setTime((e) => e - 1)
		}
	}, 1000)

	useEffect(() => {
		if(buttonRef?.current){
			start()
			buttonRef.current.focus()
		}
	}, [])

	const handleClick = () => {
		handleRequest()
	}
    
	return (
		<CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
			<Container>
				<ErrorWrapper>
					<ErrorText>
						{count != 3 ? (
							'No se pudo obtener la información, intente de nuevo.'
						):(
							'No se pudo obtener la información, intente más tarde.'
						)}
					</ErrorText>
					{count != 3 &&
						<>
							<ErrorSubText>
							Se intentará reestablecer la conexión en: {time} segundos
							</ErrorSubText>
							<BackButton
								ref={buttonRef}
								tabIndex='-1'
								onClick={handleClick}
								onKeyDown={handleClick}>
							Reintentar
							</BackButton>
						</>
					}
				</ErrorWrapper>
			</Container>
		</CSSTransition>
	)
}

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: ${colors.backgroundApp}
`

const ErrorWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorText = styled.div`
    font-size: 45px;
    text-align: center;
    font-weight: 500;
    color: ${colors.white};
`

const ErrorSubText = styled.div`
    font-size: 29px;
    text-align: center;
    font-weight: 400;
	margin: 15px 0;
    color: ${colors.white};
`

const BackButton = styled.button`
    width: 250px;
    color: ${colors.white};
    transition: all 150ms ease;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
    font-family: "Poppins", sans-serif !important;
    letter-spacing: .5px;
    font-weight: 599;
    padding: 15px 30px;
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0);
    border: 3px solid ${colors.white};
    margin-top: 30px;
    font-size: 20px;

    &:hover{
        background: ${colors.white};
        color: black;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
    }

    &:focus{
        background: ${colors.white};
        color: black;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
    }

`