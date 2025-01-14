import {Container, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useTheme} from "../../../hooks/useTheme/useTheme.ts";

export function MainSection () {

    const {theme} = useTheme()

    return (
        <Container sx={{ marginTop: 4, backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        }}>
            <Typography variant="h4" gutterBottom>
                <Outlet/>
            </Typography>
        </Container>
    )
}