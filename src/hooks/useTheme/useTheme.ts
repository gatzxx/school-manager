import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext.tsx'

export const useTheme = () => useContext(ThemeContext)
