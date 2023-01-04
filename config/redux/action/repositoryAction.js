


export const RepositoryAction = (name, page) => async (dispatch) =>{
    try {
        dispatch({type: "GET_REPOSITORY_PENDING", payload: null})
        const res = await fetch(`https://api.github.com/users/${name}/repos?per_page=6&page=${page}&sort=updated`)
        const data = await res.json()
        console.log(data);
        dispatch({type: "GET_REPOSITORY_SUCCES", payload: data})
    } catch (error) {
        dispatch({type: "GET_REPOSITORY_ERROR", payload: error})
    }
}