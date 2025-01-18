import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Student } from '../../store/types/types'
import { api } from '../../constants/api'

export const studentsApi = createApi({
    reducerPath: 'studentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getStudents: builder.query<Student[], void>({
            query: () => 'students',
            keepUnusedDataFor: 600,
        }),
        getStudentsByGroupId: builder.query<Student[], number>({
            query: (groupId) => `students?groupId=${groupId}`,
            keepUnusedDataFor: 600,
        }),
    }),
})

export const { useGetStudentsQuery, useGetStudentsByGroupIdQuery } = studentsApi
