import React, { createContext, useReducer } from 'react'
const Context = createContext({})

const initialState = {
	isShowBackdrop: false,
	isShowLoading: false,
	isShowErrorMessage: false,
	typeError: null,
	errorMessage: '',
	snackbarOptions : {
		open: false,
		type: null,
		message: ''
	},
	isShowKeyboard: false,
	networkConnection: {
		type: null,
		status: null,
		connection: {}
	}
}

const reducer = (state, action) => {
	switch (action.type) {
	case 'setIsShowBackdrop': {
		return {
			...state,
			isShowLoading: false,
			isShowErrorMessage: false,
			isShowBackdrop: action.payload,
			errorMessage: ''
		}
	}
	case 'setIsLoading': {
		return {
			...state,
			isShowLoading: action.payload
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
	case 'setIsShowKeyboard': {
		return {
			...state,
			isShowKeyboard: action.payload,
		}
	}
	case 'setNetworkConnection': {
		return {
			...state,
			networkConnection: action.payload,
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