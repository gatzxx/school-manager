type AppRoutes =
    | 'Main'
    | 'Grades'
    | 'Groups'
    | 'Students'
    | 'Teachers'
    | 'Parents'
    | 'Not_Found'

export const routePath: Record<AppRoutes, string> = {
    Main: '/',
    Grades: '/grades',
    Groups: '/groups',
    Students: '/students',
    Teachers: '/teachers',
    Parents: '/parents',
    Not_Found: '*',
}
