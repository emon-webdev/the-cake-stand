import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: 0,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer