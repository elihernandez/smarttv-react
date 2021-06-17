export function createUrlString(string) {
	let href = string.toLowerCase()
	href = href.replace(/ /g, '')

	return href
}

export function createStringParam(string) {
	let href = string.toLowerCase()
	href = href.replace(/ /g, '-')

	return href
}

export function shortString(string) {
	if (string.length > 80) {
		string = string.substring(0, 80)
		string = string + '...'
	}

	return string
}

export function limitString(string, limit){
	if (string.length > limit) {
		string = string.substring(0, limit)
		string = string + '...'
	}

	return string
}

export function isShortString(string) {
	if (string.length > 80) {
		return true
	}

	return false
}

export function isLimitString(string, limit) {
	if (string.length > limit) {
		return true
	}

	return false
}

export function replaceString(string, replace, newReplace) {
	let newString = ''
	newString = string.replace(replace, newReplace)
	return newString
}

export function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function isMovie(str) {
	if (str.includes('movie')) {
		return true
	}

	return false
}


export function isSerie(str) {
	if (str.includes('serie')) {
		return true
	}

	return false
}

export function isEpisode(str) {
	if (str.includes('episode')) {
		return true
	}

	return false
}

export function contentType(str = '') {
	if (str.includes('serie')) {
		return 'serie'
	} else {
		return 'pelicula'
	}
}

export function containsString(str, strContains){
	if(str.includes(strContains)){
		return true
	}

	return false
}

export function posterTypeSize(type){
	const listTypes = {
		0: 'portrait',
		1: 'landscape',
		2: 'square'
	}

	return listTypes[type]
}