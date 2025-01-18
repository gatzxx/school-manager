import { IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_LOCALSTORAGE_KEY } from '../../../constants/localStorage.ts'
import { useEffect } from 'react'

export function LangSwitcher() {
    const { i18n } = useTranslation()
    const { theme } = useTheme()

    useEffect(() => {
        const savedLang = localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)
        if (savedLang) {
            i18n.changeLanguage(savedLang).catch((error) => {
                console.error('Error setting language:', error)
            })
        }
    }, [i18n])

    const toggleLanguage = async () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en'
        try {
            await i18n.changeLanguage(newLang)
            localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, newLang)
        } catch (error) {
            console.error('Error switching language:', error)
        }
    }

    return (
        <IconButton onClick={toggleLanguage} sx={{ ml: 2 }}>
            <LanguageIcon
                sx={{ color: theme.palette.primary.dark, size: 50 }}
            />
        </IconButton>
    )
}
