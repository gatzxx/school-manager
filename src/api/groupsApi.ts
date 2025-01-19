import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Group } from '../store/types/types.ts'
import { api } from '../constants/api.ts'

export const groupsApi = createApi({
    reducerPath: 'groupsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getGroups: builder.query<Group[], void>({
            query: () => 'groups',
        }),
        getGroupsByGradeId: builder.query<Group[], number>({
            query: (gradeId) => `groups?gradeId=${gradeId}`,
        }),
    }),
})

export const { useGetGroupsQuery, useGetGroupsByGradeIdQuery } = groupsApi
