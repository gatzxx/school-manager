import { AppBar, Button, Toolbar, Typography, IconButton, Box } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import { navigationList } from "../../../routes/navigationList"
import ContrastIcon from '@mui/icons-material/Contrast';
import { Link, useLocation } from "react-router-dom"
import {useThemeSwitcher} from "../../../hooks/useThemeSwitcher/useThemeSwitcher.ts";

export function Header() {
    const { theme, toggleTheme } = useThemeSwitcher()
    const location = useLocation()

    return (
        <AppBar position="static" sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    School Manager
                    <SchoolIcon sx={{ marginLeft: 1 }} />
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    {navigationList.map((item) => (
                        <Button
                            key={item.path}
                            component={Link}
                            variant="text"
                            sx={{color: location.pathname === item.path ? theme.palette.primary.dark : theme.palette.primary.contrastText}}
                            to={item.path}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>

                <IconButton
                    color="primary"
                    onClick={toggleTheme}
                    sx={{ ml: 2 }}
                >
                    <ContrastIcon sx={{color: theme.palette.primary.contrastText, size: 50}} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
