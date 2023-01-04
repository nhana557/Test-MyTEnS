const initialState = {
    search: [],
    isLoading: false
}

export const SearchUserReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "SEARCH_PENDING": 
            return {
                ...state,
                isLoading: true
            }
        case "SEARCH_SUCCSES": 
            return {
                ...state,
                search: payload,
                isLoading: false
            }
        case "SEARCH_ERROR": 
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}