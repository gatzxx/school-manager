import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import {navigationList} from "../../routes/navigationList.ts";
import {Link, useLocation} from "react-router-dom";

export function Header() {

    const location = useLocation();

    return (
        <AppBar position="static" color='default'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ position: 'absolute', left: 20 }}>
                    School Manager
                    <SchoolIcon />
                </Typography>

                {navigationList.map((item) => (
                    <Button
                        key={item.path}
                        component={Link}
                        variant='text'
                        color={location.pathname === item.path ? 'primary' : 'inherit'}
                        to={item.path}
                    >
                        {item.title}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    )
}