
export const profileAction = (username = 'nhana557') => async(dispacth) => {
    try {
        dispacth({ type: "PROFILE_PENDDING", payload: null})
        const result = await fetch(`https://api.github.com/users/${username}`)
        const data = await result.json();
        dispacth({ type: "PROFILE_SUCCESS", payload: data})
    } catch (error) {
        dispacth({ type: "PROFILE_ERROR", payload: error})
    }
}
