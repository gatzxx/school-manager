import {Box} from "@mui/material";
import {Header} from "./Header.tsx";
import {Main} from "./Main.tsx";

export function Layout() {

    return (
        <Box>
            <Header />
            <Main />
        </Box>
    )
}