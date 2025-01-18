import { routePath } from './routePath.ts'

export interface NavigationType {
    path: string
    title: string
}

export const navigationList: NavigationType[] = [
    {
        path: routePath.Main,
        title: 'Main',
    },
    {
        path: routePath.Grades,
        title: 'Grades',
    },
    {
        path: routePath.Groups,
        title: 'Groups',
    },
    {
        path: routePath.Students,
        title: 'Students',
    },
    {
        path: routePath.Teachers,
        title: 'Teachers',
    },
    {
        path: routePath.Parents,
        title: 'Parents',
    },
]
