


export const RepositoryAction = (name, page) => async (dispatch) =>{
    try {
        dispatch({type: "GET_REPOSITORY_PENDING"})

        const res = await fetch(`https://api.github.com/users/${name}/repos?per_page=6&page=${page}&sort=updated`)
        const data = await res.json()
        console.log(data);
        dispatch({type: "GET_REPOSITORY_SUCCES", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "GET_REPOSITORY_ERROR"})
    }
}