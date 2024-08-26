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
                url: `/rentals`,
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
        })
        })
    })

  

export const { useBookBikeMutation, useGetBookingsQuery, useReturnBikeMutation } = bookingApi;