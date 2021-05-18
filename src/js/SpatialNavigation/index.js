/* eslint-disable no-undef */
require('spatial-navigation-js')

const initSpatialNavigation = () => {
	SpatialNavigation.init()
	SpatialNavigation.add({
		selector: 'button, input'
	})
	SpatialNavigation.makeFocusable()
}

initSpatialNavigation()