

export const SearchUserAction = (search = "") => async(dispatch) =>{
    try {
        dispatch({type: "SEARCH_PENDING", payload: null})
        const result  = await fetch(`https://api.github.com/search/users?q=${search}+repos:>10&per_page=7`)
        const data = await result.json()
        dispatch({type: "SEARCH_SUCCSES", payload: data})
    } catch (error) {
        dispatch({type: "SEARCH_ERROR", payload: error})
    }
}