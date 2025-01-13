import './App.css'

import {AppRouter} from "./routes/AppRouter.tsx";
import {Suspense} from "react";

export function App() {
    return (
        <Suspense fallback={<div>Loading page...</div>}>
            <AppRouter/>
        </Suspense>
    )
}