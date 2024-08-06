import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { productApi } from "../api/productApi"

import cartReducer from "./features/cartSlice"
import wishlistReducer from "./features/wishlistSlice"

const cartPersistConfig = {
  key: "cart",
  storage,
}

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)
const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistReducer
)

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
