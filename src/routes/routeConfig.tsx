import { RouteObject } from 'react-router-dom'
import { Suspense } from 'react'

import { Layout } from '../components/layout/Layout/Layout.tsx'
import { MainPageLazy } from '../pages/MainPage/MainPage.lazy.tsx'
import { GradesPageLazy } from '../pages/GradesPage/GradesPage.lazy.tsx'
import { NotFoundPageLazy } from '../pages/NotFoundPage/NotFoundPage.lazy.tsx'
import { GroupsPageLazy } from '../pages/GroupsPage/GroupsPage.lazy.tsx'
import { StudentsPageLazy } from '../pages/StudentsPage/StudentsPage.lazy.tsx'
import { TeachersPageLazy } from '../pages/TeachersPage/TeachersPage.lazy.tsx'
import { ParentsPageLazy } from '../pages/ParentsPage/ParentsPage.lazy.tsx'
import { ErrorPageLazy } from '../pages/ErrorPage/ErrorPage.lazy.tsx'
import { Loader } from '../components/ui/Loader/Loader.tsx'
import { routePath } from './routePath.ts'

export const routeConfig: RouteObject[] = [
    {
        path: routePath.MAIN,
        element: (
            <Suspense fallback={<Loader />}>
                <Layout />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Loader />}>
                <ErrorPageLazy />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <MainPageLazy />,
            },
            {
                path: routePath.GRADES,
                element: <GradesPageLazy />,
            },
            {
                path: routePath.GROUPS,
                element: <GroupsPageLazy />,
            },
            {
                path: routePath.STUDENTS,
                element: <StudentsPageLazy />,
            },
            {
                path: routePath.TEACHERS,
                element: <TeachersPageLazy />,
            },
            {
                path: routePath.PARENTS,
                element: <ParentsPageLazy />,
            },
            {
                path: routePath.NOT_FOUND,
                element: <NotFoundPageLazy />,
            },
        ],
    },
]
