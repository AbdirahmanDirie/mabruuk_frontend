import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const clientApi = createApi({
    reducerPath: "clientApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/clients"}),
    tagTypes: ['Clients'],

    endpoints: (build) => ({

        addclients: build.mutation({
            query(body) {
              return {
                url: `/`,
                method: 'POST',
                body:body.formData,
                headers: {
                    Authorization:  `Bearer ${body.token}`,
                },
              }
            },
            
            invalidatesTags: ['Clients']
        }),

        getclients: build.query({
            query: () => '/',
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Clients', id })),
                    { type: 'Clients', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Clients', id: 'LIST' }],
        }),

        updateclient: build.mutation({
            query(data) {
              const { formData, token} = data;
              const id = formData.id;
              return {
                url: `/client/${id}`,
                method: 'PUT',
                body: formData,
                headers: {
                    Authorization:  `Bearer ${token}`,
                },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['Clients']
        }),

        searchClient: build.query({
          query(searchTerm) {
            // const {searchTerm} = arg;
            const name = searchTerm;
              return {
                url:'/search',
                params: {name},
                method: 'GET',
              }
            },
          providesTags: (result) =>
            // is result available?
            result
              ? // successful query
                [
                  ...result.map(({ id }) => ({ type: 'Clients', id })),
                  { type: 'Clients', id: 'LIST' },
                ]
              : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                [{ type: 'Clients', id: 'LIST' }],
      }),
      
    }),

})


export const { 
    useGetclientsQuery,
    useAddclientsMutation,
    useUpdateclientMutation,
    useSearchClientQuery
} = clientApi;