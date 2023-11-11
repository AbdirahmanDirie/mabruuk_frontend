import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const user = JSON.parse(localStorage.getItem('user'));


export const clientReportApi = createApi({
    reducerPath: "clientReportApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://mabruuk-api.vercel.app"}),
    tagTypes: ['clientReport'],
    endpoints: (builder) => ({

        getTodayreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/today',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getYesterdayreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/yesterday',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getLastWeekreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/lastweek',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getThisMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/thismonth',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getLastMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/lastmonth',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getLast30dayskreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/last30days',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getLastyearreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/lastyear',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getThisyearreport: builder.query({
            query() {
                return {
                  url: '/reports/clients/thisyear',
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
                    ...result.map(({ id }) => ({ type: 'clientReport', id })),
                    { type: 'clientReport', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'clientReport', id: 'LIST' }],
        }),

        getCustomreport: builder.query({
          query(arg) {
            // console.log(token, formData)
            const {start, end} = arg;
              return {
                url:'/reports/client',
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
                  ...result.map(({ id }) => ({ type: 'clientReportApi', id })),
                  { type: 'clientReportApi', id: 'LIST' },
                ]
              : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                [{ type: 'clientReportApi', id: 'LIST' }],
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
} = clientReportApi;
