import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_APP_API_URL}` }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getSingleProducts: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getReviews: builder.query({
            query: () => `/review`,
        }),
        getProductReview: builder.query({
            query: (id) => `/product-review/${id}`,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetSingleProductsQuery,
    useGetReviewsQuery,
    useGetProductReviewQuery,
} = api;