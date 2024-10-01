//creating slice
import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },reducers:{
        addToWishlist(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)//it will retrun the first consition true object
            if(existing){
                alert("Product already exist in wishlist")

            }
            else{
                state.wishlist.push(action.payload)
                alert('product addeddd')
            }
        },
        removeFromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            alert("product removed")
        }
    }
})
export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions