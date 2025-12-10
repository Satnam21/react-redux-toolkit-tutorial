import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            // console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const cartData = state.items.filter(item => item.id != action.payload.id);
            state.items = cartData;
            localStorage.setItem("cart", JSON.stringify(cartData));
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            const { id , quantity } = action.payload;
            state.items = state.items.map((item) => 
            item.id === id ? {...item, quantity} : item
            );
            localStorage.setItem("cart", JSON.stringify(state.items));

        }
    }
})

export const { addItem, removeItem, clearCart, updateQuantity } = addToCartSlice.actions;
export default addToCartSlice.reducer;