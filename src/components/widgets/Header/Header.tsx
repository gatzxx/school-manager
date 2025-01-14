import { useTranslation } from 'react-i18next'
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Box,
} from '@mui/material'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { navigationList } from '../../../routes/navigationList'
import { Link, useLocation } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import ContrastIcon from '@mui/icons-material/Contrast'
import LanguageIcon from '@mui/icons-material/Language'

export function Header() {
    const { t, i18n } = useTranslation()
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()

    const toggleLanguage = async () => {
        try {
            await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
        } catch (error) {
            console.error('Error switching language:', error)
        }
    }

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
                <Typography
                    variant="h6"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: theme.palette.primary.dark,
                    }}
                >
                    {t('School Manager')}
                    <SchoolIcon sx={{ marginLeft: 1 }} />
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexGrow: 1,
                    }}
                >
                    {navigationList.map((item) => (
                        <Button
                            key={item.path}
                            component={Link}
                            variant="text"
                            sx={{
                                color:
                                    location.pathname === item.path
                                        ? theme.palette.primary.dark
                                        : theme.palette.primary.contrastText,
                            }}
                            to={item.path}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>
                <IconButton onClick={toggleLanguage} sx={{ ml: 2 }}>
                    <LanguageIcon
                        sx={{ color: theme.palette.primary.dark, size: 50 }}
                    />
                </IconButton>

                <IconButton onClick={toggleTheme} sx={{ ml: 2 }}>
                    <ContrastIcon
                        sx={{ color: theme.palette.primary.dark, size: 50 }}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
