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
	error: {
		show: false,
		type: null,
		message: null
	},
	isShowKeyboard: false,
	networkConnection: {
		show: false,
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
	case 'setIsShowLoading': {
		return {
			...state,
			isShowLoading: action.payload
		}
	}
	case 'setIsShowErrorMessage': {
		return {
			...state,
			isShowErrorMessage: action.payload
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