import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Parent } from '../../store/types/types'
import { api } from '../../constants/api'

export const parentsApi = createApi({
    reducerPath: 'parentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getParents: builder.query<Parent[], void>({
            query: () => 'parents',
            keepUnusedDataFor: 600,
        }),
    }),
})

export const { useGetParentsQuery } = parentsApi
