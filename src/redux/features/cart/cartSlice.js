import { createSlice } from '@reduxjs/toolkit';


const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalPrice = localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0


const updateLocalStorage = (state) => {
    localStorage.setItem('cartItems', JSON.stringify(state.products.map(item => item)));
    localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
};

const initialState = {
    products: items,
    totalPrice: totalPrice,
    totalQuantity: totalQuantity
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existing = state.products.find(
                (product) => product._id === action.payload._id
            );
            if (existing) {
                existing.quantity = existing.quantity + 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;

            updateLocalStorage(state)
        },
        removeOneProduct: (state, action) => {
            const existing = state.products.find(
                product => product._id === action.payload._id
            )
            if (existing && existing.quantity > 1) {
                existing.quantity = existing.quantity - 1
            } else {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload._id
                )
            }
            state.totalQuantity -= 1;
            state.totalPrice -= action.payload.price;
            updateLocalStorage(state)
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            state.totalQuantity * action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
            updateLocalStorage(state)
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    removeOneProduct
} = cartSlice.actions

export default cartSlice.reducer

