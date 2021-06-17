import React, { useReducer } from 'react'

const Context = React.createContext({})

export function LiveTvContextProvider({children}){
	const initialState = {  
		dataTV: [],
		currentPage: 0,
		currentCategory : null,
		guideOnce: false,
		url: null
	}

	const reducer = (state, action) => {
		switch (action.type) {
		case 'updateData': {
			return {
				...state,
				dataTV: action.payload,
			}
		}
		case 'updatePage': {
			return {
				...state,
				currentPage: action.payload,
			}
		}
		case 'updateCategory': {
			return {
				...state,
				currentCategory: action.payload,
			}
		}
		case 'updateUrl': {
			return {
				...state,
				url: action.payload,
			}
		}
		case 'setGuideOnce': {
			return {
				...state,
				guideOnce: action.payload,
			}
		}
		default: return state
		}
	}

	const [liveTvState, liveTvDispatch] = useReducer(reducer, initialState)

	return <Context.Provider value={{liveTvState, liveTvDispatch}}>
		{children}
	</Context.Provider>
}

export default Context