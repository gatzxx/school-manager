import {PaletteOptions} from "@mui/material";

const light: PaletteOptions = {
    mode: 'light',
    primary: { main: '#6F91D5', dark: '#2B4B8A' },
    secondary: { main: '#00E1FF' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#000000', secondary: '#666666' }
}

const dark: PaletteOptions = {
    mode: 'dark',
    primary: { main: '#2B4B8A', dark: '#79A4FA' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1d1d1d' },
    text: { primary: '#ffffff', secondary: '#aaaaaa' }
}

export { light, dark }