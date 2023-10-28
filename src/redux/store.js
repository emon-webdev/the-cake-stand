import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import cartSlice from './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true
})