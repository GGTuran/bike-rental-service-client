import { baseApi } from "@/redux/api/baseApi";

const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBikes: builder.query({
            query: (searchTerm = '') => ({
                url:`/bikes`,
                method: 'GET',
                params: { searchTerm },
            }),
            providesTags: ['bikes'],
        }),
        getBikeById: builder.query({
            query: (id) => ({
                url:`/bikes/${id}`,
                method: 'GET',
            }),
            providesTags: ['bikes'],
        }),
        addBike: builder.mutation({
            query:(bikeInfo) => {
                console.log('from base api=>', bikeInfo);
                return{
                    url: `/bikes`,
                    method: 'POST',
                    body: bikeInfo,
                }
            },
            invalidatesTags: ['bikes'],
        }),
        updateBike: builder.mutation({
            query: ({id, bikeInfo}) => {
                console.log('from base api', id,bikeInfo)
                return {
                    url: `/bikes/${id}`,
                    method: 'PATCH',
                    body: bikeInfo,
                };
            },
            invalidatesTags: ['bikes']
        }),
        deleteBike: builder.mutation({
            query: (id) => ({
                url: `/bikes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['bikes'],
        }),
       
       
        })
    })

export const { useGetAllBikesQuery, useGetBikeByIdQuery, useAddBikeMutation, useUpdateBikeMutation, useDeleteBikeMutation } = bikeApi;
