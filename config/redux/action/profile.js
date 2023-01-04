
export const profileAction = (username = 'nhana557') => async(dispacth) => {
    try {
        const result = await fetch(`https://api.github.com/users/${username}`)
        const data = await result.json();
        dispacth({ type: "PROFILE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
    }
}
