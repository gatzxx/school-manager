import { Typography } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

export function HomeButton() {
    const { t } = useTranslation()
    const { theme } = useTheme()

    return (
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
    )
}
