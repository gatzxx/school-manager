import {Box} from "@mui/material";
import {Main} from "../../widgets/Main/Main.tsx";
import {Header} from "../../widgets/Header/Header.tsx";

export function Layout() {

    return (
        <Box>
            <Header />
            <Main />
        </Box>
    )
}