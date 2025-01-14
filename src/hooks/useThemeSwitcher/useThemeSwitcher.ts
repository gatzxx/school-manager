import { useState, useEffect } from 'react'
import { THEME_LOCALSTORAGE_KEY } from '../../constants/localStorage'
import { createAppTheme } from '../../theme/appTheme/appTheme'
import { AppTheme } from '../../theme/appTheme/appTheme'

export const useThemeSwitcher = () => {
    const [mode, setMode] = useState<AppTheme>(() => {
        const storedMode = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
        return storedMode === 'dark' || storedMode === 'light' ? (storedMode as AppTheme) : 'light'
    })

    const toggleTheme = () => {
        const newMode: AppTheme = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
    }

    useEffect(() => {
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, mode)
    }, [mode])

    const theme = createAppTheme(mode)

    return { mode, theme, toggleTheme }
}