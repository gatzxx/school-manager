import { navigationList } from '../../../routes/navigationList.ts'
import { Box, Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { useTranslation } from 'react-i18next'

export function Navigation() {
    const location = useLocation()
    const { theme } = useTheme()
    const { t } = useTranslation()

    return (
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
                        textTransform: 'none',
                        color:
                            location.pathname === item.path
                                ? theme.palette.primary.dark
                                : theme.palette.primary.contrastText,
                    }}
                    to={item.path}
                >
                    {t(item.title)}
                </Button>
            ))}
        </Box>
    )
}
