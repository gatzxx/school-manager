import { gradesApi } from '../../api/apiSlice/gradesApi'
import { groupsApi } from '../../api/apiSlice/groupsApi'
import { studentsApi } from '../../api/apiSlice/studentsApi.ts'
import { teachersApi } from '../../api/apiSlice/teachersApi.ts'
import { parentsApi } from '../../api/apiSlice/parentsApi.ts'

export interface StateSchema {
    [gradesApi.reducerPath]: ReturnType<typeof gradesApi.reducer>
    [groupsApi.reducerPath]: ReturnType<typeof groupsApi.reducer>
    [studentsApi.reducerPath]: ReturnType<typeof studentsApi.reducer>
    [teachersApi.reducerPath]: ReturnType<typeof teachersApi.reducer>
    [parentsApi.reducerPath]: ReturnType<typeof parentsApi.reducer>
}

export interface Grade {
    id: number
    grade: number
}

export interface Group {
    gradeId: number
    id: number
    group: string
}

export interface Student {
    groupId: number
    id: number
    grade: number
    group: string
    name: string
    surname: string
    sex: string
    birthday: string
    score: number
}

export interface Teacher {
    groupId: number
    id: number
    grade: number
    group: string
    name: string
    surname: string
    sex: string
    birthday: string
    phone: string
}

export interface Parent {
    studentId: number
    id: number
    name: string
    surname: string
    sex: string
    birthday: string
    phone: string
}
