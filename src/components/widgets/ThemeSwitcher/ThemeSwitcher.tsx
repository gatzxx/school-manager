import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme()

    return (
        <IconButton onClick={toggleTheme} sx={{ ml: 2 }}>
            {theme.palette.mode === 'light' ? (
                <LightModeIcon
                    sx={{ color: theme.palette.primary.dark, size: 50 }}
                />
            ) : (
                <DarkModeIcon
                    sx={{ color: theme.palette.primary.dark, size: 50 }}
                />
            )}
        </IconButton>
    )
}
