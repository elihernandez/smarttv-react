import React, { createContext, useReducer } from 'react'
const Context = createContext({})

const initialState = {
	isBackdrop: false,
	isLoading: false,
	isErrorMessage: false,
	typeError: null,
	errorMessage: '',
	snackbarOptions : {
		open: false,
		type: null,
		message: ''
	}
}

const reducer = (state, action) => {
	switch (action.type) {
	case 'setIsBackdrop': {
		return {
			...state,
			isLoading: false,
			isErrorMessage: false,
			errorMessage: '',
			isBackdrop: action.payload
		}
	}
	case 'setIsLoading': {
		return {
			...state,
			isLoading: action.payload
		}
	}
	case 'setIsErrorMessage': {
		return {
			...state,
			isErrorMessage: action.payload
		}
	}
	case 'setTypeError': {
		return {
			...state,
			typeError: action.payload
		}
	}
	case 'setErrorMessage': {
		return {
			...state,
			errorMessage: action.payload
		}
	}
	case 'setSnackbarOptions': {
		return {
			...state,
			snackbarOptions: action.payload,
		}
	}
	default: return state
	}
}

export function GlobalContextProvider({ children }) {
	const [globalState, globalDispatch] = useReducer(reducer, initialState)

	return <Context.Provider value={{ globalState, globalDispatch }}>
		{ children }
	</Context.Provider>
}

export default Context