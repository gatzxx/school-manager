import { Container, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { Suspense } from 'react'
import { Loader } from '../../ui/Loader/Loader.tsx'

export function MainSection() {
    const { theme } = useTheme()

    return (
        <Container
            sx={{
                marginTop: 4,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
            }}
        >
            <Typography variant="h4" gutterBottom>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Typography>
        </Container>
    )
}
