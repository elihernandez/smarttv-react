export function isKeyLeft(e){
	if(e.nativeEvent.which === 37 || e.nativeEvent.keyCode === 37 || e.nativeEvent.code === 'Left'){
		return true
	}

	return false
}

export function isKeyRight(e){
	if(e.nativeEvent.which === 39 || e.nativeEvent.keyCode === 39 || e.nativeEvent.code === 'Right'){
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