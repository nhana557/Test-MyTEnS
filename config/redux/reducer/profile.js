const initialState = {
    profile : []
}

export const profileReducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case "PROFILE_SUCCESS": 
            return{
                ...state,
                profile: payload
            }
        default: 
        return state
    }
    
}