import './App.css'

import {ThemeProvider} from "./providers/ThemeProvider/ThemeProvider.tsx";
import {AppRouter} from "./providers/AppRouter/AppRouter.tsx";
import {CssBaseline} from "@mui/material";

export function App() {

    return (
        <ThemeProvider>
            <CssBaseline />
            <AppRouter/>
        </ThemeProvider>
    )
}