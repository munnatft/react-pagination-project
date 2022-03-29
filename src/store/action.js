export const FETCH_PASSENGER_LIST = 'FETCH_PASSENGER_LIST';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';




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

export const setCurrentPage = (page) => {
    return {
        type : SET_CURRENT_PAGE,
        payload : page
    }
}



// asynchronous code

export const handleFetchPassgengerList = (page) => {
    return async(dispatch) => {
        try {
            dispatch(toggleLoading())
            const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
            const data = await res.json();
            dispatch(toggleLoading())
            dispatch(fetchPassengerList(data));
        } catch (error) {
            
        }
    }
}

