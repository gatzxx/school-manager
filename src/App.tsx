import './App.css'

import ErrorBoundary from "./ErrorBoundary.tsx";
import {AppRouter} from "./routes/AppRouter.tsx";

export function App() {
    return (
        <ErrorBoundary>
            <AppRouter/>
        </ErrorBoundary>
    )
}