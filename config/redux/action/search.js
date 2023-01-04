import axios from "axios"



export const SearchUserAction = (search = " ") => async(dispatch) =>{
    try {
        const result  = await fetch(`https://api.github.com/search/users?q=${search}+repos:>10&per_page=7`)
        const data = await result.json()
        console.log(" ini resul", data)
        dispatch({type: "SEARCH_SUCCSES", payload: data})
    } catch (error) {
        console.log(error)
    }
}