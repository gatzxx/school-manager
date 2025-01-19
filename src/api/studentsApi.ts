import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Student } from '../store/types/types.ts'
import { api } from '../constants/api.ts'

export const studentsApi = createApi({
    reducerPath: 'studentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getStudents: builder.query<Student[], void>({
            query: () => 'students',
        }),
        getStudentsByGroupId: builder.query<Student[], number>({
            query: (groupId) => `students?groupId=${groupId}`,
        }),
    }),
})

export const { useGetStudentsQuery, useGetStudentsByGroupIdQuery } = studentsApi
