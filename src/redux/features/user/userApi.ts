import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url:`/users/me`,
                method: 'GET',
            }),
            // providesTags
        }),
        updateProfile: builder.mutation({
            query: (userInfo) => ({
                url:`/users/me`,
                method: 'PATCH',
                body: userInfo,
            }),
            // invalidatesTags: ['users']
        })
       
        })
    })

    export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;

