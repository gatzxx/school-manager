import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {GradesPage} from "../pages/GradesPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: "grades",
                element: <GradesPage />,
            }
        ],
    },
])

export function AppRouter() {
    return <RouterProvider router={router} />
}