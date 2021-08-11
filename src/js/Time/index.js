const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
const utc = require('dayjs/plugin/utc')

export function getEventTime(inicio, fin) {
	dayjs.extend(customParseFormat)
	const startTime = dayjs(inicio).format('hh:mm A')
	const endTime = dayjs(fin).format('hh:mm A')

	return `${startTime} - ${endTime}`
}

export function isLive(inicio, fin){
	dayjs.extend(isSameOrAfter)
	dayjs.extend(isSameOrBefore)

	if(dayjs().isSameOrAfter(inicio) && dayjs().isSameOrBefore(fin)){
		return true
	}

	return false
}

export function isEvent(type){
	if(type == 'leon_livetv_Event'){
		return true
	}

	return false
}

export function timerEvent(Inicio){
	const h = dayjs(Inicio).diff(dayjs(), 'h')
	const m = (dayjs(Inicio).diff(dayjs(), 'm')) - (h * 60)
	let time

	if(h === 0 && m === 0){
		time = 'Un momento'
	}else{
		if(h > 0){
			if(m > 0){
				if(h === 1){
					if(m === 1){
						time = h+' hora y '+m+' minuto'
					}else{
						time = h+' hora y '+m+' minutos'
					}
				}else{
					if(m === 1){
						time = h+' horas y '+m+' minuto'
					}else{
						time = h+' horas y '+m+' minutos'
					}
				}
                        
			}else{
				if(h === 1){
					time = h+' hora'
				}else{
					time = h+' horas'
				}
			}
		}else{
			if(m === 1){
				time = m+' minuto'
			}else{
				time = m+' minutos'
			}
		}
	}
     
	return time
}

export function getProgressTimeEvent(Inicio, Fin){
	const duration = dayjs(Fin).diff(dayjs(Inicio), 'm')
	const position = dayjs().diff(dayjs(Inicio), 'm')
	const time = ((position * 100) / duration)+'%'

	return time
}

export function getUtcOffsetLocal(){
	dayjs.extend(utc)
	const utcOffsetLocal = 'UTC'+(dayjs().utcOffset()/60)

	return utcOffsetLocal
}

export function getProgressMovie(ResumePos, Length){
	let position = ResumePos / 1000
	let duration = (Length).replace(' min', '')
	duration = parseInt(duration, 10) * 60
	let time = (position * 100) / duration

	return time
}

function updateData(movieId, data, positionVideoMil){
	data.map(({cmData}, indexC) => {
		cmData.map(({Registro}, indexM) => {
			if(movieId == Registro){
				data[indexC].cmData[indexM].ResumePos = positionVideoMil
			}
		})
	})

	return data
}

export function setProgressMovie(currentTime, movie, data, dispatch){
	const movieId = movie.Registro
	let positionVideoMil = Math.round(currentTime * 1000)
	dispatch({type: 'setData', payload: updateData(movieId, data, positionVideoMil)})
}

export function secondsToString(seconds) {
	let time
	let hour = Math.floor(seconds / 3600)
	hour = (hour < 10)? '0' + hour : hour

	let minute = Math.floor((seconds / 60) % 60)
	minute = (minute < 10)? '0' + minute : minute

	let second =  Math.floor(seconds % 60)
	second = (second < 10)? '0' + second : second

	if(hour != '00'){
		time = hour + ':' + minute + ':' + second
	}else{
		if(minute != '00'){
			time = minute + ':' + second
		}else{
			time =  '0:' + second
		}
	}

	return time
}

export function minutesToHoursString(seconds){
	let string
	// let seconds = minutes * 60
	let minutes = Math.floor((seconds / 60) % 60)
	let hours = Math.floor(seconds / 3600)

	if(hours > 0){
		if(minutes > 0){
			string = `${hours} h ${minutes} min`
		}else{
			string = `${hours} h`
		}
	}else{
		string = `${minutes} min`
	}

	return string
}

export function getYearDate(date){
	return dayjs(date).year()
}

export function getNowDateTime(){
	return dayjs()
}

export function addToDate(date, amount, unit){
	if(!date){
		return dayjs().add(amount, unit)
	}

	return dayjs(date).add(amount, unit) 
}

export function isSameOrBeforeDate(date){
	dayjs.extend(isSameOrBefore)

	if(dayjs().isSameOrBefore(date)){
		return true
	}

	return false
}

export function isSameOrAfterDate(date){
	dayjs.extend(isSameOrAfter)

	if(dayjs().isSameOrAfter(date)){
		return true
	}

	return false
}

export function addMinutesToDate(date = null, minutesToAdd){
	if(!date){
		return dayjs().add(minutesToAdd, 'minute')
	}
	
	return dayjs(date).add(minutesToAdd, 'minute')
}

export function addHoursToDate(date = null, hoursToAdd){
	if(!date){
		return dayjs().add(hoursToAdd, 'hour')
	}
	
	return dayjs(date).add(hoursToAdd, 'hour')
}

export function addDaysToDate(date = null, daysToAdd){
	if(!date){
		return dayjs().add(daysToAdd, 'day')
	}
	
	return dayjs(date).add(daysToAdd, 'day')
}

export function transformSecondsToStringHour(duration) {
	let hours = Math.floor(duration / 3600)
	let minutes = Math.floor((duration % 3600) / 60)
	let seconds = Math.floor(duration % 60)

	// Anteponiendo un 0 a los minutos si son menos de 10 
	minutes = minutes < 10 ? '0' + minutes : minutes
	// Anteponiendo un 0 a los segundos si son menos de 10 
	seconds = seconds < 10 ? '0' + seconds : seconds

	if (hours < 1) {
		return minutes + ':' + seconds  // 41:30
	}
		
	return hours + ':' + minutes + ':' + seconds  // 2:41:30
}