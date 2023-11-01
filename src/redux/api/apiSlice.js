import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_APP_API_URL}` }),
    tagTypes: ["reviews"],
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
        addProductComment: builder.mutation({
            query(data) {
                return {
                    url: `/product-review`,
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ["reviews"]
        }),
        getProductReview: builder.query({
            query: (id) => `/product-review/${id}`,
            providesTags: ["reviews"]
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetSingleProductsQuery,
    useGetReviewsQuery,
    useGetProductReviewQuery,
    useAddProductCommentMutation,
} = api;