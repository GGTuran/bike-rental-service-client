import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        bookBike: builder.mutation({
            query: (data) => ({
                url: `/rentals`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['bookings'],
        }),
        getBookings: builder.query({
            query: () => ({
                url: `/rentals/user`,
                method: 'GET',
            }),
            providesTags: ['bookings'],
        }),
        returnBike: builder.mutation({
            query: (id) => ({
                url: `/rentals/${id}/return`,
                method: 'PUT',
            }),
            invalidatesTags: ['bookings'],
        }),
        allBookings: builder.query({
            query: () => ({
                url: `/rentals/admin`,
                method: 'GET',
            }),
            providesTags: ['bookings'],
        }),
        })
    })

  

export const { useBookBikeMutation, useGetBookingsQuery, useReturnBikeMutation, useAllBookingsQuery } = bookingApi;