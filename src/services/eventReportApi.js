import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const user = JSON.parse(localStorage.getItem('user'));


export const eventReportApi = createApi({
    reducerPath: "eventReportApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    tagTypes: ['eventReports'],
    endpoints: (builder) => ({

        getTodayreport: builder.query({
            query() {
                return {
                  url: '/reports/events/today',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getYesterdayreport: builder.query({
            query() {
                return {
                  url: '/reports/events/yesterday',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getLastWeekreport: builder.query({
            query() {
                return {
                  url: '/reports/events/lastweek',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getThisMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/events/thismonth',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getLastMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/events/lastmonth',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getLast30dayskreport: builder.query({
            query() {
                return {
                  url: '/reports/events/last30days',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getLastyearreport: builder.query({
            query() {
                return {
                  url: '/reports/events/lastyear',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getThisyearreport: builder.query({
            query() {
                return {
                  url: '/reports/events/thisyear',
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
                    ...result.map(({ id }) => ({ type: 'eventReports', id })),
                    { type: 'eventReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'eventReports', id: 'LIST' }],
        }),

        getCustomreport: builder.query({
          query(arg) {
            // console.log(token, formData)
            const {start, end} = arg;
              return {
                url:'/reports/event',
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
                  ...result.map(({ id }) => ({ type: 'eventReportApi', id })),
                  { type: 'eventReportApi', id: 'LIST' },
                ]
              : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                [{ type: 'eventReportApi', id: 'LIST' }],
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
} = eventReportApi;