import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://mabruuk-api.vercel.app"}),
    tagTypes: ['users'],
    endpoints: (builder) => ({
      
        loginUser: builder.mutation({
            query: (body) =>{ 
                return {
                url: "/users/login",
                method: "POST",
                body
                }
            }
        }),

        registerUser: builder.mutation({
            query: ({formData, token}) =>{
                return {
                url: "/users/register",
                method: "POST",
                body:formData,
                headers: {
                    Authorization:  `Bearer ${token}`,
                },
                }
            },
            invalidatesTags: ['users']
        }),

        getUsers: builder.query({
            query: () => '/users',
            providesTags: (result) =>
              // is result available?
              result
                ? // successful query
                  [
                    ...result.map(({ id }) => ({ type: 'users', id })),
                    { type: 'users', id: 'LIST' },
                  ]
                : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                  [{ type: 'users', id: 'LIST' }],
        }),

        updateUser: builder.mutation({
            query({formData, token, id}) {
              return {
                url: `/users/update/${id}`,
                method: 'PUT',
                body:formData,
                headers: {
                  Authorization:  `Bearer ${token}`,
              },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['users']
        }),
        deleteUser: builder.mutation({
            query(data) {
              const {id, token} = data;
              return {
                url: `/users/user/${id}`,
                method: 'delete',
                headers: {
                  Authorization:  `Bearer ${token}`,
              },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['users']
        }),
        updateUserImage: builder.mutation({
            query({formData, token}) {
              return {
                url: `/users/image`,
                method: 'PUT',
                body:formData,
                headers: {
                  Authorization:  `Bearer ${token}`,
              },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['users']
        }),

        changeUserPassword: builder.mutation({
            query({passwordDetails, token}) {
              return {
                url: `/users/changePassword`,
                method: 'PUT',
                body:passwordDetails,
                headers: {
                  Authorization:  `Bearer ${token}`,
              },
              }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: ['users']
        }),

        forgotPassword: builder.mutation({

            query: (data) =>{
              console.log(data)
              return {
              url: "/users/forgotpassword",
              method: "POST",
              body:data,
              }
          },
        }),

        resetPassword: builder.mutation({

            query: (data) =>{
              console.log(data)
              return {
              url: `/users/resetpassword/${data?.resetToken}`,
              method: "PUT",
              body:data,
              }
          },
        }),


    })
})


export const { 
    useLoginUserMutation, 
    useRegisterUserMutation,
    useGetUsersQuery,
    useUpdateUserMutation,
    useChangeUserPasswordMutation,
    useUpdateUserImageMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useDeleteUserMutation
} = userApi;
