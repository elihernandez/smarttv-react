import { createSlice } from '@reduxjs/toolkit'
import axios from '../../js/Axios'
import { getURL } from '../../api/endpoints'
import { addToDate, isSameOrAfterDate } from '../../js/Time'
import { validateSuscription } from '../../js/Auth/validateSuscription'

export const vodSlice = createSlice({
	name: 'vod',
	initialState: {
		cmData: [],
		movie: [],
		serie: [],
		season: [],
		isLoading: true,
		lastDateRequest: null,
		isError: false,
		typeError: null
	},
	reducers: {
		setCmData: (state, action) => {
			state.cmData = action.payload
		},
		setMovie: (state, action) => {
			state.movie = action.payload
		},
		setSerie: (state, action) => {
			state.serie = action.payload
		},
		setSeason: (state, action) => {
			state.season = action.payload
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setLastDateRequest: (state, action) => {
			state.lastDateRequest = action.payload
		},
		setError: (state, action) => {
			state.isError = action.payload.isError
			state.typeError = action.payload.typeError
		}
	},
})

// Action creators are generated for each case reducer function
export const { setCmData, setMovie, setSerie, setSeason, setLoading, setLastDateRequest } = vodSlice.actions

export const getDataAPI = (userToken, lastDateRequest) => (dispatch) => {
	dispatch(setLoading(true))
	const url = getURL('catalogue-vod', userToken)
	
	const handleRequest = async() => {
		try{
			const response = await axios.get(url)
			validateSuscription(response, dispatch)
			dispatch(setCmData(response))
			// dispatch(setLastDateRequest(JSON.stringify(addToDate(null, 3, 'minutes'))))
			setTimeout(() => dispatch(setLoading(false)), 1500)
		}catch(e){
			console.log(e)
		}
	}
	
	if(!lastDateRequest){
		handleRequest()
	}else{
		if(isSameOrAfterDate(lastDateRequest)){
			handleRequest()
		}else{
			setTimeout(() => dispatch(setLoading(false)), 1500)
		}
	}
}

export default vodSlice.reducer