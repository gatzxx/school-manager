import './App.css'

import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary.tsx'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider.tsx'
import { AppRouter } from './providers/AppRouter/AppRouter.tsx'
import { CssBaseline } from '@mui/material'
import './i18n/i18n.ts'

export function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
