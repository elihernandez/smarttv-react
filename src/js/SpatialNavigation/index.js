/* eslint-disable no-undef */
require('spatial-navigation-js')

class Navigate {
	constructor(){
	}

	init () {
		SpatialNavigation.init()
	}

	add (selector, rememberSource = true, enterTo = 'last-focused') {
		SpatialNavigation.add({
			selector: selector,
			rememberSource: rememberSource,
			enterTo: enterTo,
		})
	}

	focus (selector) {
		SpatialNavigation.focus(selector)
	}

	clear () {
		SpatialNavigation.clear()
	}
}

export const Navigation = new Navigate()
Navigation.init()