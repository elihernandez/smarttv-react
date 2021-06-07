export function ListAlbums({ data, listType, indexList, tabValues }) {
	const posterType = 2
	const slidesToShow = 7
	const classes = 'list list-tracks square'

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		swipeToSlide: true,
		focusOnSelect: true,
		speed: 500
	}

	return (
		<div className={classes}>
			<TitleList title='Álbumes' />
			<SlickSlider settings={settings}>
				{data.albums.map((album) => {
					return (
						<Item key={album.albumID} posterType={posterType} data={album} listType={listType} />
					)
				})}
			</SlickSlider>
		</div>
	)
}