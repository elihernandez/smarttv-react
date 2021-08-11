/* eslint-disable no-undef */
require('spatial-navigation-js')

class Navigate {
	constructor(){
	}

	init () {
		SpatialNavigation.init()
	}

	add (selector, defaultElement = '', section = '') {
		console.log(defaultElement)
		SpatialNavigation.add(section, {
			selector: selector,
			rememberSource: true,
			defaultElement: defaultElement,
			enterTo: 'last-focused'
		})
	}

	focus (selector) {
		SpatialNavigation.focus(selector)
	}
	
	makeFocusable () {
		SpatialNavigation.makeFocusable()
	}

	remove (section) {
		SpatialNavigation.remove(section)
	}

	disable (section) {
		SpatialNavigation.disable(section)
	}

	enable (section) {
		SpatialNavigation.enable(section)
	}

	clear () {
		SpatialNavigation.clear()
	}
}

export const Navigation = new Navigate()
Navigation.init()