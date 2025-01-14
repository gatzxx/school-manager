import {createContext} from 'react'
import {createAppTheme} from '../../theme/appTheme/appTheme.ts'

interface ThemeContextProps {
    theme: ReturnType<typeof createAppTheme>
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: createAppTheme('light'),
    toggleTheme: () => {}
})
