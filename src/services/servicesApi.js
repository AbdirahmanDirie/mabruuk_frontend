import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://mabruuk-api.vercel.app/services"}),
    tagTypes: ['Services'],

    endpoints: (build) => ({

        addServices: build.mutation({
            query(body) {
              return {
                url: `/`,
                method: 'POST',
                body,
                headers: {
                    Authorization:  `Bearer ${body.token}`,
                },
              }
            },
            
            invalidatesTags: ['Services']
        }),

        getServices: build.query({
            query: () => '/',
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Services', id })),
                    { type: 'Services', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Services', id: 'LIST' }],
        }),

        updateServices: build.mutation({
            query(data) {
              const { id, ...body } = data;
              return {
                url: `/service/${id}`,
                method: 'PUT',
                body,
                headers: {
                    Authorization:  `Bearer ${body.token}`,
                },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['Services']
        }),
    }),

})


export const { 
   useAddServicesMutation,
   useUpdateServicesMutation,
   useGetServicesQuery
} = serviceApi;
