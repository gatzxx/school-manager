import {Container, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";

export function Main () {

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                <Outlet/>
            </Typography>
        </Container>
    )
}