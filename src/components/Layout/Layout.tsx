import {navigationList} from "../../routes/navigationList.ts";
import {Box, Button, Stack} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

export function Layout() {

    return (
        <Box>
            <Stack spacing={1} direction='row'>
                {navigationList.map((item) => (
                    <Button
                        key={item.path}
                        component={Link}
                        variant='outlined'
                        color='primary'
                        to={item.path}
                    >
                        {item.title}
                    </Button>
                ))}
            </Stack>
            <Outlet/>
        </Box>
    )
}