import { routePath } from './routePath.ts'

export interface NavigationType {
    path: string
    title: string
}

export const navigationList: NavigationType[] = [
    {
        path: routePath.MAIN,
        title: 'MAIN',
    },
    {
        path: routePath.GRADES,
        title: 'GRADES',
    },
    {
        path: routePath.GROUPS,
        title: 'GROUPS',
    },
    {
        path: routePath.STUDENTS,
        title: 'STUDENTS',
    },
    {
        path: routePath.TEACHERS,
        title: 'TEACHERS',
    },
    {
        path: routePath.PARENTS,
        title: 'PARENTS',
    },
]
