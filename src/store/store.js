import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addToCart";
import productReducer from "./productSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})