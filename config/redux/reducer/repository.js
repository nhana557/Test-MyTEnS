const initialState = {
    data: [],
    isLoading: false
}


export const RepositoryReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "GET_REPOSITORY_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_REPOSITORY_SUCCES": 
            return {
                ...state,
                data: payload,
                isLoading: false
            }
        case "GET_REPOSITORY_ERROR": 
            return {
                ...state,
                error: payload
            }
        default : 
            return state

    }
}