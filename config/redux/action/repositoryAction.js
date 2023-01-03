


export const RepositoryAction = () => async (dispatch) =>{
    try {
        dispatch({type: "GET_REPOSITORY_PENDING"})

        const res = await fetch("https://api.github.com/users/nhana557/repos?per_page=6")
        const data = await res.json()
        dispatch({type: "GET_REPOSITORY_SUCCES", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "GET_REPOSITORY_ERROR"})
    }
}