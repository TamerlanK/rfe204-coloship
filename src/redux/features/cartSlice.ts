import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types"

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.id !== String(action.payload)
      )
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions
export default cartSlice.reducer
