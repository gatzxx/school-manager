type AppRoutes =
    | 'MAIN'
    | 'GRADES'
    | 'GROUPS'
    | 'STUDENTS'
    | 'TEACHERS'
    | 'PARENTS'
    | 'NOT_FOUND'

export const routePath: Record<AppRoutes, string> = {
    MAIN: '/',
    GRADES: '/grades',
    GROUPS: '/groups',
    STUDENTS: '/students',
    TEACHERS: '/teachers',
    PARENTS: '/parents',
    NOT_FOUND: '*'
}