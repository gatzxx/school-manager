import React, {ErrorInfo, Suspense} from "react"
import {ErrorPage} from "./pages/ErrorPage/ErrorPage.tsx";

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error("Error caught by ErrorBoundary:", error)
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.error("Error caught by ErrorBoundary:", error, info.componentStack)
    }

    render(): React.ReactNode {
        const {hasError} = this.state
        const {children} = this.props

        if (hasError) {
            return <Suspense fallback=''> <ErrorPage /> </Suspense>
        }

        return children
    }
}

export default ErrorBoundary