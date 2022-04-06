import { FETCH_PASSENGER_LIST, SET_CURRENT_PAGE, TOGGLE_LOADING } from "./action";

const initialState = {
    totalPassengers : 0,
    totalPages : 0,
    passengerLists : {},
    loading : false,
    currentPage : 1,
    pages : [],
}

export const PassengerReducer = (state = initialState , action) => {

    switch (action.type) {
        case FETCH_PASSENGER_LIST:

            const newPages = [...state.pages,state.currentPage]
            return {
                ...state ,
                totalPassengers : action.payload.totalPassengers,
                totalPages : action.payload.totalPages,
                listOfPassengers : action.payload.data,
                passengerLists : {...state.passengerLists ,
                    [state.currentPage] : action.payload.data
                },
                pages : newPages.filter((page,index) => newPages.indexOf(page) === index),
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