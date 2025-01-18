import { AppBar, Toolbar } from '@mui/material'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { Navigation } from '../Navigation/Navigation.tsx'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher.tsx'
import { LangSwitcher } from '../LangSwitcher/LangSwitcher.tsx'
import { HomeButton } from '../HomeButton/HomeButton.tsx'

export function Header() {
    const { theme } = useTheme()

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.primary.main,
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
