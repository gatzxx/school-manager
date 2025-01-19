import { PaletteOptions } from '@mui/material'

const light: PaletteOptions = {
    mode: 'light',
    primary: {
        main: '#b3f4ff',
        contrastText: '#FFFFFF',
    },
    secondary: { main: '#5cff1d' },
    background: { default: '#FBF5DD', paper: '#6A80B9' },
    text: { primary: '#ffaae1', secondary: '#FFFFFF' },
}

const dark: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#7BD3EA',
        contrastText: '#FFFFFF',
    },
    secondary: { main: '#A1EEBD' },
    background: { default: '#30475E', paper: '#222831' },
    text: { primary: '#CB9DF0', secondary: '#FFFFFF' },
}

export { light, dark }
