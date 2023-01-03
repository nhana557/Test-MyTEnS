
export const profileAction = () => async(dispacth) => {
    try {
        const result = await fetch("https://api.github.com/users/nhana557")
        const data = await result.json();
        dispacth({ type: "PROFILE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
    }
}
//  async function getProfile(state = initialState) {
//     const result = await fetch("https://api.github.com/users/nhana557")
//     // const data = await result.json()
//     console.log(result.json())
//     if(result){
//         return{
//             ...state,
//             payload : result.json()
//         }
//     }
// }
// getProfile()

// export const counterSlice = createSlice({
//   name: 'Profile',
//   initialState,
//   reducers: {
//     GET_PROFILE(state = initialState, action){
//         console.log(state)
//         return{
//             state
//         }
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { GET_PROFILE } = counterSlice.actions

// export default counterSlice.reducer