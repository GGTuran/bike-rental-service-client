import { baseApi } from "@/redux/api/baseApi";

const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBikes: builder.query({
            query: () => ({
                url:`/bikes`,
                method: 'GET',
            }),
            // providesTags
        })
       
        })
    })

export const { useGetAllBikesQuery } = bikeApi;
