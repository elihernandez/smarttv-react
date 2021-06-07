export function ListRadio({ data, listType, indexList, tabValues }) {
	const { category } = data
	const slidesToShow = 5
	const totalItems = data.cmData.length
	const initialSlide = getInitialSlide(totalItems, slidesToShow, indexList, tabValues)
	const classes = 'list list-card landscape'
	const [pageActive, setPageActive] = useState(null)
	
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		swipeToSlide: true,
		focusOnSelect: false,
		initialSlide: initialSlide,
		speed: 500,
		afterChange: current => setPageActive(current)
	}

	return (
		<div className={classes}>
			<TitleList title={category} />
			<TabsIndicators slidesToShow={slidesToShow} data={data.cmData} pageActive={pageActive} initialSlide={initialSlide} />
			<SlickSlider settings={settings}>
				{data.cmData.map((dataItem) => {
					return (
						<Item key={dataItem.Registro} posterType={data.poster_type} data={dataItem} listType={listType} titleCategory={data.category} />
					)
				})}
			</SlickSlider>
		</div>
	)
}