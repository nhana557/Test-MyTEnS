const initialState = {
    search: []
}

export const SearchUserReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "SEARCH_SUCCSES": 
            return {
                ...state,
                search: payload
            }
        default:
            return state
    }
}