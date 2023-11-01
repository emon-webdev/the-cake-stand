import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find((product) => product._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.totalPrice += action.payload.price;
        },
        removeOneProduct: (state, action) => {
            const existingProduct = state.products.find((product) => product._id === action.payload._id);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                state.totalPrice -= action.payload.price;
            } else {
                state.products = state.products.filter((product) => product._id !== action.payload._id);
                state.totalPrice -= action.payload.price;
            }
        },
        removeFromCart: (state, action) => {
            state.totalPrice -= action.payload.price * action.payload.quantity;
            state.products = state.products.filter((product) => product._id !== action.payload._id);
        },
    }
})

export const {
    addToCart,
    removeFromCart,
    removeOneProduct
} = cartSlice.actions

export default cartSlice.reducer










// reducers: {
//     addToCart: (state, action) => {
//         const existing = state.products.find(
//             (product) => product._id === action.payload._id
//         );
//         console.log(existing?.quantity)
//         if (existing) {
//             existing.quantity = existing.quantity + 1;
//         } else {
//             state.products.push({ ...action.payload, quantity: 1 });
//         }
//         state.totalPrice += action.payload.price;
//     },
//     removeOneProduct: (state, action) => {
//         const existing = state.products.find(
//             product => product._id === action.payload._id
//         )
//         console.log('remove one product')
//         if (existing && existing.quantity > 1) {
//             existing.quantity = existing.quantity - 1
//         } else {
//             console.log('Delete product from cart minus btn')
//             state.products = state.products.filter(
//                 (product) => product._id !== action.payload._id
//             )
//         }
//         state.totalPrice -= action.payload.price;
//     },
//     removeFromCart: (state, action) => {
//         state.products = state.products.filter(
//             (product) => product._id !== action.payload._id
//         );
//         state.totalPrice -= action.payload.price * action.payload.quantity;
//     },
// },