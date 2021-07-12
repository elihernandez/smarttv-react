import React from 'react'
import { Content } from './components/Content'
import { Info } from './components/Info'
import { Timer } from './components/Timer'
import { Guide } from './components/Guide'
import { Loader } from './components/Loader'
import { Video } from './components/Video'
import './styles.css'

const LiveTvPage = () => {
	return (
		<div className="wrapper-livetv">
			<div className="livetv-content">
				{/* <Switch>
							<Route path={`${path}/:channelId?`} > */}
				<Content>
					{/* <div className="background-overlay" />
							<Info />
							<Timer /> */}
					{/* <Loader /> */}
				</Content>
				<Guide />
				{/* <Video /> */}
				{/* </Route>
						</Switch> */}
			</div>
		</div>
	)
}

export default LiveTvPage