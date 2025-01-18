import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Teacher } from '../../store/types/types'
import { api } from '../../constants/api'

export const teachersApi = createApi({
    reducerPath: 'teachersApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getTeachers: builder.query<Teacher[], void>({
            query: () => 'teachers',
            keepUnusedDataFor: 600,
        }),
    }),
})

export const { useGetTeachersQuery } = teachersApi
