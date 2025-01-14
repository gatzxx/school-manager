import {PaletteOptions} from "@mui/material";

const light: PaletteOptions = {
    mode: 'light',
    primary: { main: '#6F91D5', dark: '#000ac5', contrastText: '#FFFFFF'},
    secondary: { main: '#00E1FF' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#000000', secondary: '#666666' }
}

const dark: PaletteOptions = {
    mode: 'dark',
    primary: { main: '#222831', dark: '#FF1E56', contrastText: '#FFFFFF' },
    secondary: { main: '#f48fb1' },
    background: { default: '#30475E', paper: '#1d1d1d' },
    text: { primary: '#ffffff', secondary: '#aaaaaa' }
}

export { light, dark }