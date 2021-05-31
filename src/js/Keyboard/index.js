export function isKeyLeft(e){
	if(e.nativeEvent.which === 37 || e.nativeEvent.keyCode === 37 || e.nativeEvent.code === 'Left' || e.nativeEvent.code === 'ArrowLeft'){
		return true
	}

	return false
}

export function isKeyRight(e){
	if(e.nativeEvent.which === 39 || e.nativeEvent.keyCode === 39 || e.nativeEvent.code === 'Right' || e.nativeEvent.code === 'ArrowRight'){
		return true
	}

	return false
}

export function isKeyUp(e){
	if(e.nativeEvent.which === 38 || e.nativeEvent.keyCode === 38 || e.nativeEvent.code === 'Up' || e.nativeEvent.code === 'ArrowUp'){
		return true
	}

	return false
}

export function isKeyDown(e){
	if(e.nativeEvent.which === 40 || e.nativeEvent.keyCode === 40 || e.nativeEvent.code === 'Down' || e.nativeEvent.code === 'ArrowDown'){
		return true
	}

	return false
}

export function isKeyEnter(e){
	if(e.nativeEvent.which === 13 || e.nativeEvent.keyCode === 13 || e.nativeEvent.code === 'Enter' || e.nativeEvent.type === 'click'){
		return true
	}

	return false
}