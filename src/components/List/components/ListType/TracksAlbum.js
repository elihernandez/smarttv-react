export function ListTracksAlbum({ data, listType, indexList, tabValues }) {
	const posterType = 0
	const classes = 'list-tracks-album'

	return (
		<div className={classes}>
			<div className="header-table-tracks">
				<ul className="header">
					<li className="number-item">#</li>
					<li className="title-item">Título</li>
					<li className="time-item"><i className="fal fa-clock"></i></li>
					<li className="like-item"></li>
					<li className="menu-item"></li>
				</ul>
			</div>
			{data.tracks.map((track) => {
				return (
					<Item key={track.regID} posterType={posterType} data={track} listType={listType} />
				)
			})}
		</div>
	)
}