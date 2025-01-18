import { CircularProgress, Box } from '@mui/material'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

export function Loader() {
    const { theme } = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85vh',
            }}
        >
            <CircularProgress
                sx={{ color: theme.palette.primary.dark }}
                size={100}
            />
        </Box>
    )
}
