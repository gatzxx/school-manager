import { StoreProvider } from './providers/StoreProvider/StoreProvider.tsx'
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary.tsx'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider.tsx'
import { CssBaseline } from '@mui/material'
import { AppRouter } from './providers/AppRouter/AppRouter.tsx'
import './i18n/i18n.ts'

export function App() {
    return (
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <CssBaseline />
                    <AppRouter />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    )
}
