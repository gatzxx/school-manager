import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from '../../routes/routeConfig.tsx'
import { Suspense } from 'react'
import { Loader } from '../../components/ui/Loader/Loader.tsx'

const router = createBrowserRouter(routeConfig)

export function AppRouter() {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
