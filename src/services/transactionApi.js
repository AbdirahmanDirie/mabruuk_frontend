import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const user = JSON.parse(localStorage.getItem('user'));


export const transactionApi = createApi({
    reducerPath: "transactinApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    tagTypes: ['transactions'],
    endpoints: (builder) => ({
        
        createTransaction: builder.mutation({
        query(body) {
          // const {startDate, endDate, status, address, description, serviceId, categoryId, clientId} = body.formData;
          
          return {
            url: `/transaction/create`,
            method: 'POST',
            body:body.formData,
            headers: {
              Authorization:  `Bearer ${body.token}`,
          },
          }
        },
        
        invalidatesTags: ['transactions']
        }),
        getTransactions: builder.query({
            query() {
                return {
                  url: '/transaction',
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
                    ...result.map(({ id }) => ({ type: 'transactions', id })),
                    { type: 'transactions', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'transactions', id: 'LIST' }],
        }),
        getSumTransactions: builder.query({
            query() {
                return {
                  url: '/transaction/sum',
                  method: 'GET',
                  headers: {
                    Authorization:  `Bearer ${user?.token}`,
                },
                }
              },
            providesTags: ['transactions']
              // is result available?
              
        }),
        getincomeTransactions: builder.query({
            query() {
                return {
                  url: '/transaction/income',
                  method: 'GET',
                  headers: {
                    Authorization:  `Bearer ${user?.token}`,
                },
                }
              },
            providesTags: ['transactions']
              // is result available?
              
        }),
        getexpenseTransactions: builder.query({
            query() {
                return {
                  url: '/transaction/expense',
                  method: 'GET',
                  headers: {
                    Authorization:  `Bearer ${user?.token}`,
                },
                }
              },
            providesTags: ['transactions']
              // is result available?
              
        }),
        updateTransaction: builder.mutation({
          query(data) {
            const { formData, token } = data;
            const id = formData.id;
            return {
              url: `/transaction/update/${id}`,
              method: 'PUT',
              body:formData,
              headers: {
                Authorization:  `Bearer ${token}`,
            },
            }
          },
          // Invalidates all queries that subscribe to this Post `id` only.
          // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
          invalidatesTags: ['transactions']
        }),
        deleteTransaction: builder.mutation({
          query(data) {
            const {id, token} = data;
            return {
              url: `/transaction/delete/${id}`,
              method: 'delete',
              headers: {
                Authorization:  `Bearer ${token}`,
            },
            }
          },
          // Invalidates all queries that subscribe to this Post `id` only.
          invalidatesTags: ['transactions']
        }),



    })
})


export const { 
    useCreateTransactionMutation,
    useGetTransactionsQuery,
    useGetSumTransactionsQuery,
    useGetincomeTransactionsQuery,
    useGetexpenseTransactionsQuery,
    useDeleteTransactionMutation,
    useUpdateTransactionMutation
} = transactionApi;