import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Grade } from '../store/types/types.ts'
import { api } from '../constants/api.ts'

export const gradesApi = createApi({
    reducerPath: 'gradesApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getGrades: builder.query<Grade[], void>({
            query: () => 'grades',
        }),
    }),
})

export const { useGetGradesQuery } = gradesApi
