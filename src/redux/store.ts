import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "../api/productApi"

import cartReducer from "./features/cartSlice"
import wishlistReducer from "./features/wishlistSlice"

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
