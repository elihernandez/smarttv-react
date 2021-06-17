import React, { useReducer } from 'react'

const Context = React.createContext({})

export function VideoContextProvider({ state, reducer, children }) {
	const initialState = state

	const [videoState, videoDispatch] = useReducer(reducer, initialState)

	return <Context.Provider value={{ videoState, videoDispatch }}>
		{children}
	</Context.Provider>
}

export default Context