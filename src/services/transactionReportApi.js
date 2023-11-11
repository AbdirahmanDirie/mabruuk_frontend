import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const user = JSON.parse(localStorage.getItem('user'));


export const transactionReportApi = createApi({
    reducerPath: "transactionReportApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://mabruuk-api.vercel.app"}),
    tagTypes: ['TransactionReports'],
    endpoints: (builder) => ({

        getTodayreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/today',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getYesterdayreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/yesterday',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getLastWeekreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/lastweek',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getThisMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/thismonth',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getLastMonthkreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/lastmonth',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getLast30dayskreport: builder.query({
          
            query() {
                return {
                  url: '/reports/transaction/last30days',
                  method: 'GET',
                  headers: {
                    Authorization:  `Bearer ${user?.token}`,
                },
                
                }
                     
              },
            providesTags: ({result}) =>
              // is result available?
              
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getLastyearreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/lastyear',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),

        getThisyearreport: builder.query({
            query() {
                return {
                  url: '/reports/transaction/thisyear',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
        }),
        getCustomreport: builder.query({
            query(arg) {
              // console.log(token, formData)
              const {start, end} = arg;
                return {
                  url:'/reports/transaction',
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
                    ...result.map(({ id }) => ({ type: 'TransactionReports', id })),
                    { type: 'TransactionReports', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'TransactionReports', id: 'LIST' }],
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
} = transactionReportApi;
