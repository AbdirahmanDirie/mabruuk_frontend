import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const user = JSON.parse(localStorage.getItem('user'));


export const userReportApi = createApi({
    reducerPath: "userReportApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    tagTypes: ['usersReport'],
    endpoints: (builder) => ({

        getTodayreport: builder.query({
            query() {
                return {
                  url: '/reports/users/today',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getYesterdayreport: builder.query({
            query() {
                return {
                  url: '/reports/users/yesterday',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getLastWeekreport: builder.query({
            query() {
                return {
                  url: '/reports/users/lastweek',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getThisMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/users/thismonth',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getLastMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/users/lastmonth',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getLast30dayskreport: builder.query({
            query() {
                return {
                  url: '/reports/users/last30days',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getLastyearreport: builder.query({
            query() {
                return {
                  url: '/reports/users/lastyear',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getThisyearreport: builder.query({
            query() {
                return {
                  url: '/reports/users/thisyear',
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
                    ...result.map(({ id }) => ({ type: 'usersReport', id })),
                    { type: 'usersReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'usersReport', id: 'LIST' }],
        }),

        getCustomreport: builder.query({
          query(arg) {
            // console.log(token, formData)
            const {start, end} = arg;
              return {
                url:'/reports/user',
                params: {start, end},
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
                  ...result.map(({ id }) => ({ type: 'usersReport', id })),
                  { type: 'usersReport', id: 'LIST' },
                ]
              : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                [{ type: 'usersReport', id: 'LIST' }],
      }),


    })
})


export const { 
useGetTodayreportQuery,
useGetYesterdayreportQuery,
useGetLastWeekreportQuery,
useGetThisMonthkreportQuery,
useGetLastMonthkreportQuery,
useGetLast30dayskreportQuery,
useGetLastyearreportQuery,
useGetThisyearreportQuery,
useGetCustomreportQuery
} = userReportApi;