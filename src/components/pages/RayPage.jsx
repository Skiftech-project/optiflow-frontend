import { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { RayCanvas } from '../canvas';
import { Header } from '../interface';
import { ErrorBoundary } from '../ui';

const RayPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = state => () => {
        setMenuOpen(state);
    };
    console.log(menuOpen);

    return (
        <>
            <Header position="fixed" />
            <Box
                component="main"
                sx={{
                    height: `calc(100vh - 64px)`,
                    paddingTop: '64px',
                }}
            >
                <IconButton onClick={toggleMenu(true)}>
                    <KeyboardDoubleArrowRightIcon fontSize="large" />
                </IconButton>

                <ErrorBoundary>
                    <RayCanvas />
                </ErrorBoundary>
            </Box>
        </>
    );
};

export default RayPage;
