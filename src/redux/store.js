import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartSlice from './features/cart/cartSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true
})