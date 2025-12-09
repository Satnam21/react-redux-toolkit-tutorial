import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state) => {
            state.value = state.value + 1;

        },
        removeItem: (state) => {
            state.value > 0 ? state.value = state.value - 1 : null;
        },
        clearCart: (state) => {
            state.value = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;