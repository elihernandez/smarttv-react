// 0 Suscripción expirada
// 1 Suscripción válida
// 2 Suscripción periodo de gracia
// 3 Suscripción gratuita
// 4 Sesión no válida

export default function getSuscriptionStatus(response){
	const suscriptionStatus = response.suscriptionStatus
		? response.suscriptionStatus
		: response[0].SuscriptionStatus

	return { suscriptionStatus }
}

export function validateSuscription(response){
	if(response.suscriptionStatus == 4){
		throw(4)
	}else if(response[0].SuscriptionStatus == 4){
		throw(4)
	}

	return true
}