import {createTheme} from '@mui/material'
import {dark, light} from "../palettes/palettes.ts";

export type AppTheme = 'light' | 'dark'

export const createAppTheme = (mode: AppTheme) => {
    const palette = mode === 'dark' ? dark : light

    return createTheme({
        palette
    })
}