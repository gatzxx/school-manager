import {Container, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useThemeSwitcher} from "../../../hooks/useThemeSwitcher/useThemeSwitcher.ts";

export function Main () {

    const {theme} = useThemeSwitcher()

    return (
        <Container sx={{ marginTop: 4, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <Typography variant="h4" gutterBottom>
                <Outlet/>
            </Typography>
        </Container>
    )
}