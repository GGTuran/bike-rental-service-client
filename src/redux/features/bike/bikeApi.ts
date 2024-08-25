import { baseApi } from "@/redux/api/baseApi";

const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBikes: builder.query({
            query: () => ({
                url:`/bikes`,
                method: 'GET',
            }),
            providesTags: ['bikes'],
        }),
        getBikeById: builder.query({
            query: (id) => ({
                url:`bikes/${id}`,
                method: 'GET',
            }),
            providesTags: ['bikes'],
        })
       
        })
    })

export const { useGetAllBikesQuery, useGetBikeByIdQuery } = bikeApi;
