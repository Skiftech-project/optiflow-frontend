import { Box } from '@mui/material';

import { RayCanvas } from '../canvas';
import { Header } from '../interface';
import { ErrorBoundary } from '../ui';

const RayPage = () => {
    return (
        <>
            <Header position="fixed" />
            <Box component="main" height="100vh">
                <ErrorBoundary>
                    <RayCanvas />
                </ErrorBoundary>
            </Box>
        </>
    );
};

export default RayPage;
