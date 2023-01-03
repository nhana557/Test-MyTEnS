const initialState = {
    data: [],
    loading: false
}


export const RepositoryReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case "GET_REPOSITORY_PENDING":
            return {
                ...state,
                loading: true
            }
        case "GET_REPOSITORY_SUCCES": 
            return {
                ...state,
                data: payload
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