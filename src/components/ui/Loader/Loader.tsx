import { CircularProgress, Box } from '@mui/material';

export function Loader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress size={100}/>
        </Box>
    );
}