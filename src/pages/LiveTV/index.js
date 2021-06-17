import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { LiveTvContextProvider } from '../../context/LiveTvContext'
import { VideoContextProvider } from '../../context/VideoContext'
import { Content } from './components/Content'
import { Info } from './components/Info'
import { Timer } from './components/Timer'
import { Guide } from './components/Guide'
import { Loader } from './components/Loader'
import { Video } from './components/Video'
import './styles.css'

const initialState = {
	dataChannel: null,
	activeChannel: false,
	loadingChannel: false,
	timerChannel: false,
	activeTimer: false,
	volume: 50,
	muteVolume: false,
	fullScreen: false,
	timeoutErrorRef: null
}

const reducer = (state, action) => {
	switch (action.type) {
	case 'updateData': {
		return {
			...state,
			dataChannel: action.payload,
			timerChannel: false,
			activeTimer: false
		}
	}
	case 'updateActive': {
		return {
			...state,
			activeChannel: action.payload,
		}
	}
	case 'updateLoading': {
		return {
			...state,
			loadingChannel: action.payload,
		}
	}
	case 'updateTimer': {
		return {
			...state,
			timerChannel: action.timer,
			activeTimer: action.active
		}
	}
	case 'updateVolume': {
		return {
			...state,
			volume: action.payload
		}
	}
	case 'muteVolume': {
		return {
			...state,
			muteVolume: action.payload
		}
	}
	case 'setFullScreen': {
		return {
			...state,
			fullScreen: action.payload
		}
	}
	case 'setTimeoutErrorRef': {
		return {
			...state,
			timeoutErrorRef: action.payload
		}
	}
	default: return state
	}
}

export const LiveTvPage = () => {
	let { path } = useRouteMatch()

	return (
		<div className="wrapper-livetv">
			<LiveTvContextProvider>
				<VideoContextProvider state={initialState} reducer={reducer}>
					<div className="livetv-content">
						{/* <Switch>
							<Route path={`${path}/:channelId?`} > */}
						<Content>
							{/* <div className="background-overlay" />
							<Info />
							<Timer /> */}
							<Guide />
							<Loader />
						</Content>
						{/* <Video /> */}
						{/* </Route>
						</Switch> */}
					</div>
				</VideoContextProvider>
			</LiveTvContextProvider>
		</div>
	)
}