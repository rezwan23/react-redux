import { createSlice } from '@reduxjs/toolkit'


const colorSlice = createSlice({
    name : "color",
    initialState : { value : ""},
    reducers : {
        changeColor : ( state, action ) => { state.value = action.payload }
    }
});

export default colorSlice.reducer;


export const { changeColor } = colorSlice.actions