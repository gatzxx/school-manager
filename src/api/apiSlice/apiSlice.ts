import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    Grade,
    Group,
    Parent,
    Student,
    Teacher,
} from '../../store/types/types.ts'
import { api } from '../../constants/api.ts'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        getGrades: builder.query<Grade[], void>({
            query: () => '/grades',
        }),
        getGroups: builder.query<Group[], void>({
            query: () => `/groups`,
        }),
        getStudents: builder.query<Student[], void>({
            query: () => `/students`,
        }),
        getTeachers: builder.query<Teacher[], void>({
            query: () => `/teachers`,
        }),
        getParents: builder.query<Parent[], void>({
            query: () => `/parents`,
        }),
    }),
})

export const {
    useGetGradesQuery,
    useGetGroupsQuery,
    useGetStudentsQuery,
    useGetTeachersQuery,
    useGetParentsQuery,
} = apiSlice
