import { AppBar, Toolbar } from '@mui/material'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { Navigation } from '../../ui/Navigation/Navigation.tsx'
import { ThemeSwitcher } from '../../ui/ThemeSwitcher/ThemeSwitcher.tsx'
import { LangSwitcher } from '../../ui/LangSwitcher/LangSwitcher.tsx'
import { HomeButton } from '../../ui/HomeButton/HomeButton.tsx'

export function Header() {
    const { theme } = useTheme()

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.primary.contrastText,
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <HomeButton />
                <Navigation />
                <LangSwitcher />
                <ThemeSwitcher />
            </Toolbar>
        </AppBar>
    )
}
