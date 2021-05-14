import React, { createContext, useReducer } from 'react'
const Context = createContext({})

const initialState = {
	devicePlatform: 'SmartTv Emulator',
	deviceType: 'SmartTv Emulator',
	deviceUUID: '',
	deviceVersion: ''
}

const reducer = (state, action) => {
	switch (action.type) {
	case 'setDevicePlatform': {
		return {
			...state,
			devicePlatform: action.payload
		}
	}
	case 'setDeviceType': {
		return {
			...state,
			deviceType: action.payload
		}
	}
	case 'setDeviceUUID': {
		return {
			...state,
			deviceUUID: action.payload
		}
	}
	case 'setDeviceVersion': {
		return {
			...state,
			deviceVersion: action.payload
		}
	}
	default: return state
	}
}

export function TvDeviceContextProvider({ children }) {
	const [stateTvDevice, dispatchTvDevice] = useReducer(reducer, initialState)

	return <Context.Provider value={{ stateTvDevice, dispatchTvDevice }}>
		{stateTvDevice &&
            children
		}
	</Context.Provider>
}

export default Context