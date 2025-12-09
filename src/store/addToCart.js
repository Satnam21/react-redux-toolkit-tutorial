import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            state.value = state.value + 1;

        }
    }
})

export const {} = addToCartSlice.actions;
export default addToCartSlice.reducer;