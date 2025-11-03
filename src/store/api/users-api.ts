import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BackendUser, User, UserFormData } from '@/types/user';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://users-backend-api.fly.dev/api';

const toUser = (backendUser: BackendUser): User => ({
  ...backendUser,
  active: backendUser.active === 1,
});

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['User'],
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      transformResponse: (response: BackendUser[]) => response.map(toUser),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),

    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      transformResponse: toUser,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),

    createUser: builder.mutation<User, UserFormData>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body: {
          name: body.name,
          email: body.email,
          role: body.role,
          active: body.active ?? true,
        },
      }),
      transformResponse: toUser,
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),

    updateUser: builder.mutation<User, { id: number; data: Partial<UserFormData> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: toUser,
      invalidatesTags: (_result, _error, { id }) => [
        { type: 'User', id },
        { type: 'User', id: 'LIST' },
      ],
    }),

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: 'User', id },
        { type: 'User', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
