
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';
const initialState = {
    user: {
        email: null, // You can set this to an initial value if needed
    },
    isLoading: false,
    isError: false,
    error: null, // You can set this to an initial value if needed
};

export const createUser = createAsyncThunk(
    'user/createUser',
    async ({ email, password }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        return data.user.email;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user.email = action.payload;
                state.isLoading = false;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user.email = null;
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
    },
});

export const {
    setUser,
    setLoading,
    setError,
    setErrorMessage
} = userSlice.actions;

export default userSlice.reducer;
