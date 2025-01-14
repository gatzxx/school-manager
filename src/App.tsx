import './App.css'

import {AppRouter} from "./providers/AppRouter/AppRouter.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useThemeSwitcher} from "./hooks/useThemeSwitcher/useThemeSwitcher.ts";

export function App() {

    const {theme} = useThemeSwitcher();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppRouter/>
        </ThemeProvider>
    )
}