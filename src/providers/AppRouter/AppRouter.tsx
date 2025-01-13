import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {routeConfig} from "../../routes/routeConfig.tsx";

const router = createBrowserRouter(routeConfig)

export function AppRouter() {
    return <RouterProvider router={router} />
}