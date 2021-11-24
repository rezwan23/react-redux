import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : { value : { name : "Ghani", age : 30, email : "ghani.diu@gmail.com"} },


    reducers : {
        login : ( state, action ) => {
            state.value = action.payload
        },
        logout : ( state, action ) => {
            state.value = { name : "Ghani", age : 30, email : "ghani.diu@gmail.com"}
        }
    }
})

export default userSlice.reducer;

export const { login, logout } = userSlice.actions