export const FETCH_PASSENGER_LIST = 'FETCH_PASSENGER_LIST';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const LOAD_NEXT_OR_PREV_DATA = 'LOAD_NEXT_OR_PREV_DATA';




export const fetchPassengerList = (data) => {
    return {
        type : FETCH_PASSENGER_LIST,
        payload : data
    }
} 

export const toggleLoading = () => {
    return {
        type : TOGGLE_LOADING
    }
}

export const loadNextOrPrevData= (data) => {
    return {
        type : LOAD_NEXT_OR_PREV_DATA,
        payload : data
    }
}



// asynchronous code

export const handleFetchPassgengerList = (page) => {
    return async(dispatch) => {
        try {
            const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
            const data = await res.json();
            dispatch(toggleLoading())
            dispatch(fetchPassengerList(data));
        } catch (error) {
            
        }
    }
}

export const handleNextorPrevDataFetch = (page) => {
    return async(dispatch) => {
        try {
            
        } catch (error) {
            
        }
    }
}