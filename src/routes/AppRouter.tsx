import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {MainPageLazy} from "../pages/MainPage/MainPage.lazy.tsx";
import {GradesPageLazy} from "../pages/GradesPage/GradesPage.lazy.tsx";
import {NotFoundPageLazy} from "../pages/NotFoundPage/NotFoundPage.lazy.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPageLazy />,
            },
            {
                path: "grades",
                element: <GradesPageLazy />,
            },
            {
                path: "*",
                element: <NotFoundPageLazy />,
            },
        ],
    },
])

export function AppRouter() {
    return <RouterProvider router={router} />
}