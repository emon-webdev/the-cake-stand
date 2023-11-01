import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getSingleProducts: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetSingleProductsQuery,
} = productApi;