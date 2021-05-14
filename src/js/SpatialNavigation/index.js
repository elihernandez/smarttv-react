/* eslint-disable no-undef */
require('spatial-navigation-js')

export const initSpatialNavigation = () => {
	SpatialNavigation.init()
	SpatialNavigation.add({
		selector: 'button, input'
	})
	SpatialNavigation.makeFocusable()
}