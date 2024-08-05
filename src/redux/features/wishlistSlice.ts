import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types"

export interface WishlistItem extends Product {}

export interface WishlistState {
  items: WishlistItem[]
}

const initialWishlistState: WishlistState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        state.items.push(action.payload)
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.id !== String(action.payload)
      )
    },
  },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
