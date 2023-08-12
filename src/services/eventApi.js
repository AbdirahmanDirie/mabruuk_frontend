import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const user = JSON.parse(localStorage.getItem("user"));
export const eventApi = createApi({
    reducerPath: "eventApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/events"}),
    tagTypes: ['Events'],

    endpoints: (build) => ({

        addEvent: build.mutation({
            query(body) {
              // const {startDate, endDate, status, address, description, serviceId, categoryId, clientId} = body.formData;
              
              return {
                url: `/`,
                method: 'POST',
                body:body.formData,
                headers: {
                  Authorization:  `Bearer ${body.token}`,
              },
              }
            },
            
            invalidatesTags: ['Events']
        }),

        getEvents: build.query({
          query() {
            return {
              url: '/',
              method: 'GET',
              headers: {
                Authorization:  `Bearer ${user?.token}`,
            },
            }
          },
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Events', id })),
                    { type: 'Events', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Events', id: 'LIST' }],
        }),

        getBookedEvents: build.query({
          query() {
            return {
              url: '/event/status/Booked',
              method: 'GET',
              headers: {
                Authorization:  `Bearer ${user?.token}`,
            },
            }
          },
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Events', id })),
                    { type: 'Events', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Events', id: 'LIST' }],
        }),

        getApprovedEvents: build.query({
          query() {
            return {
              url: '/event/status/Approved',
              method: 'GET',
              headers: {
                Authorization:  `Bearer ${user?.token}`,
            },
            }
          },
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Events', id })),
                    { type: 'Events', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Events', id: 'LIST' }],
        }),

        getCanceledEvents: build.query({
          query() {
            return {
              url: '/event/status/Canceled',
              method: 'GET',
              headers: {
                Authorization:  `Bearer ${user?.token}`,
            },
            }
          },
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Events', id })),
                    { type: 'Events', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Events', id: 'LIST' }],
        }),

        updateEvent: build.mutation({
            query(data) {
              const { formData, token } = data;
              const id = formData.id;
              return {
                url: `/event/${id}`,
                method: 'PUT',
                body:formData,
                headers: {
                  Authorization:  `Bearer ${token}`,
              },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['Events']
        }),

        deleteEvent: build.mutation({
            query(id) {
              return {
                url: `/event/${id}`,
                method: 'Put',
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: ['Events']
        }),
    }),

})


export const { 
useGetEventsQuery,
useAddEventMutation,
useUpdateEventMutation,
useDeleteEventMutation,
useGetApprovedEventsQuery,
useGetBookedEventsQuery,
useGetCanceledEventsQuery
} = eventApi;