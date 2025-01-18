import { RouteObject } from 'react-router-dom'

import { Layout } from '../components/layout/Layout/Layout.tsx'
import { MainPageLazy } from '../pages/MainPage/MainPage.lazy.tsx'
import { GradesPageLazy } from '../pages/GradesPage/GradesPage.lazy.tsx'
import { NotFoundPageLazy } from '../pages/NotFoundPage/NotFoundPage.lazy.tsx'
import { GroupsPageLazy } from '../pages/GroupsPage/GroupsPage.lazy.tsx'
import { StudentsPageLazy } from '../pages/StudentsPage/StudentsPage.lazy.tsx'
import { TeachersPageLazy } from '../pages/TeachersPage/TeachersPage.lazy.tsx'
import { ParentsPageLazy } from '../pages/ParentsPage/ParentsPage.lazy.tsx'
import { ErrorPageLazy } from '../pages/ErrorPage/ErrorPage.lazy.tsx'
import { routePath } from './routePath.ts'

export const routeConfig: RouteObject[] = [
    {
        path: routePath.Main,
        element: <Layout />,
        errorElement: <ErrorPageLazy />,
        children: [
            {
                index: true,
                element: <MainPageLazy />,
            },
            {
                path: routePath.Grades,
                element: <GradesPageLazy />,
            },
            {
                path: routePath.Groups,
                element: <GroupsPageLazy />,
            },
            {
                path: routePath.Students,
                element: <StudentsPageLazy />,
            },
            {
                path: routePath.Teachers,
                element: <TeachersPageLazy />,
            },
            {
                path: routePath.Parents,
                element: <ParentsPageLazy />,
            },
            {
                path: routePath.Not_Found,
                element: <NotFoundPageLazy />,
            },
        ],
    },
]
