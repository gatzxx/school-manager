import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Teacher } from '../store/types/types.ts'
import { api } from '../constants/api.ts'

export const teachersApi = createApi({
    reducerPath: 'teachersApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getTeachers: builder.query<Teacher[], void>({
            query: () => 'teachers',
        }),
    }),
})

export const { useGetTeachersQuery } = teachersApi
