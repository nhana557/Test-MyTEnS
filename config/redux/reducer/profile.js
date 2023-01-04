const initialState = {
    profile : [],
    isLoading: false
}

export const profileReducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case "PROFILE_PENDING": 
        return{
            ...state,
            isLoading: true
        }
        case "PROFILE_SUCCESS": 
            return{
                ...state,
                profile: payload,
                isLoading: false
            }
        case "PROFILE_ERROR": 
            return{
                ...state,
                error: payload
            }
        default: 
        return state
    }
    
}