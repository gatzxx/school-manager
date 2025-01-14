import {Box} from "@mui/material";
import {MainSection} from "../../widgets/MainSection/MainSection.tsx";
import {Header} from "../../widgets/Header/Header.tsx";

export function Layout() {

    return (
        <Box>
            <Header />
            <MainSection />
        </Box>
    )
}