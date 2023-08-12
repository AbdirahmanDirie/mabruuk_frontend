import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/categories"}),
    tagTypes: ['Categories'],

    endpoints: (build) => ({

        addCategories: build.mutation({
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
            
            invalidatesTags: ['Categories']
        }),

        getCategories: build.query({
            query: () => '/',
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'Categories', id })),
                    { type: 'Categories', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'Categories', id: 'LIST' }],
        }),

        updateCategory: build.mutation({
            query(data) {
              const { id, ...body } = data;
              return {
                url: `/category/${id}`,
                method: 'PUT',
                body,
                headers: {
                    Authorization:  `Bearer ${body.token}`,
                },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['Categories']
        }),
    }),

})


export const { 
    useAddCategoriesMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
} = categoryApi;