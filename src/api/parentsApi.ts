import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Parent } from '../store/types/types.ts'
import { api } from '../constants/api.ts'

export const parentsApi = createApi({
    reducerPath: 'parentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getParents: builder.query<Parent[], void>({
            query: () => 'parents',
        }),
    }),
})

export const { useGetParentsQuery } = parentsApi
