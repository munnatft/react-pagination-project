import { FETCH_PASSENGER_LIST, SET_CURRENT_PAGE, TOGGLE_LOADING } from "./action";

const initialState = {
    totalPassengers : 0,
    totalPages : 0,
    listOfPassengers : [],
    loading : false,
    currentPage : 0
}

export const PassengerReducer = (state = initialState , action) => {

    switch (action.type) {
        case FETCH_PASSENGER_LIST:
            return {
                ...state ,
                totalPassengers : action.payload.totalPassengers,
                totalPages : action.payload.totalPages,
                listOfPassengers : action.payload.data,
                loading : false
            }

        case TOGGLE_LOADING : 
            return {
                ...state ,
                loading : !state.loading
            }
        
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage : action.payload
            }
    
        default:
            return state;
    }
}