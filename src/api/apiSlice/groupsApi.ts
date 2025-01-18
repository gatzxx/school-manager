import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Group } from '../../store/types/types'
import { api } from '../../constants/api'

export const groupsApi = createApi({
    reducerPath: 'groupsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getGroups: builder.query<Group[], void>({
            query: () => 'groups',
            keepUnusedDataFor: 600,
        }),
        getGroupsByGradeId: builder.query<Group[], number>({
            query: (gradeId) => `groups?gradeId=${gradeId}`,
            keepUnusedDataFor: 600,
        }),
    }),
})

export const { useGetGroupsQuery, useGetGroupsByGradeIdQuery } = groupsApi
