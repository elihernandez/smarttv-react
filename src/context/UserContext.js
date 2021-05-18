import React, { createContext, useReducer } from 'react'
const Context = createContext({})

const initialState = {
	userLogged: null,
	userToken: null,
	credentials: [],
	suscriptionStatus: null,
	errorAuth: false
}

const reducer = (state, action) => {
	switch (action.type) {
	case 'setUserLogged': {
		return {
			...state,
			userLogged: action.payload
		}
	}
	case 'setUserToken': {
		return {
			...state,
			userToken: action.payload
		}
	}
	case 'setCredentials': {
		return {
			...state,
			credentials: action.payload
		}
	}
	case 'setErrorAuth': {
		return {
			...state,
			errorAuth: action.payload
		}
	}
	case 'setSuscriptionStatus': {
		return {
			...state,
			suscriptionStatus: action.payload
		}
	}
	default: return state
	}
}

export function UserContextProvider({ children }) {
	const [stateUser, dispatchUser] = useReducer(reducer, initialState)

	return <Context.Provider value={{ stateUser, dispatchUser }}>
		{ children }
	</Context.Provider>
}

export default Context