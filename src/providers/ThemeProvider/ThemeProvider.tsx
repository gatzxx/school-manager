import {ReactNode, useEffect, useMemo, useState} from "react"
import {THEME_LOCALSTORAGE_KEY} from "../../constants/localStorage.ts"
import {AppTheme, createAppTheme} from "../../theme/appTheme/appTheme.ts"
import {ThemeProvider as MUIThemeProvider} from "@mui/material/styles"
import {ThemeContext} from "../../context/ThemeContext/ThemeContext.tsx"

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [mode, setMode] = useState<AppTheme>(() => {
        const storedMode = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
        return storedMode === "dark" || storedMode === "light" ? (storedMode as AppTheme) : "light"
    })

    useEffect(() => {
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, mode)
    }, [mode])

    const toggleTheme = () => {
        const newMode: AppTheme = mode === "light" ? "dark" : "light"
        setMode(newMode)
    }

    const theme = useMemo(() => createAppTheme(mode), [mode])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}
