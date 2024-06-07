import { Box } from '@mui/material';

import { RayCanvas } from '../canvas';
import { Header } from '../interface';

const RayPage = () => {
    return (
        <>
            <Header position="fixed" />
            <Box component="main" height="100vh">
                <RayCanvas />
            </Box>
        </>
    );
};

export default RayPage;
