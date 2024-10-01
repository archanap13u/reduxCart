import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishslice from "./Slices/wishslice";
import cartslice from "./Slices/cartslice";
const store=configureStore({
    reducer:{
        ProductReducer:productSlice,
        wishReducer:wishslice,
        CartReducer:cartslice
    }
})
export default store
