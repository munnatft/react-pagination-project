import { FETCH_PASSENGER_LIST, TOGGLE_LOADING } from "./action";

const initialState = {
    totalPassengers : 0,
    totalPages : 0,
    listOfPassengers : [],
    loading : true,
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
                loading : false
            }
    
        default:
            return state;
    }
}