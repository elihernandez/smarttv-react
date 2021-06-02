import React, { useRef, useContext, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import GlobalContext from '../../context/GlobalContext'
import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const ErrorMessage = ({ show, message }) => {
	const buttonRef = useRef(null)
	const { globalDispatch } = useContext(GlobalContext)

	useEffect(() => {
		if(buttonRef?.current){
			buttonRef.current.focus()
		}
	}, [show])

	const handleClick = () => {
		globalDispatch({ type: 'setIsShowBackdrop', payload: false })
	}
    
	return (
		<CSSTransition in={show} timeout={100} classNames="fade" unmountOnExit>
			<Container>
				<ErrorWrapper>
					<ErrorText>
						{message}
					</ErrorText>
					<BackButton ref={buttonRef} tabIndex='-1' onClick={handleClick} onKeyDown={handleClick}>Volver</BackButton>
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

const BackButton = styled.button`
    width: auto;
    color: ${colors.white};
    transition: all 150ms ease;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
    font-family: "Poppins", sans-serif !important;
    letter-spacing: .5px;
    font-weight: 400;
    padding: 15px 45px;
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0);
    border: 2px solid ${colors.white};
    margin-top: 30px;
    font-size: 16px;

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