import { useState } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { RayCanvas } from '../canvas';
import { Header } from '../interface';
import { ErrorBoundary, SideMenu } from '../ui';

const RayPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = state => () => {
        setMenuOpen(state);
    };

    return (
        <>
            <Header position="fixed" />
            <Box
                component="main"
                sx={{
                    height: `calc(100vh - 64px)`,
                    paddingTop: '64px',
                    position: 'relative',
                }}
            >
                <SideMenu open={menuOpen} onClose={toggleMenu(false)}></SideMenu>

                <Tooltip
                    title="Відкрити меню для розрахування променю "
                    placement="bottom-end"
                    arrow
                >
                    <IconButton
                        onClick={toggleMenu(true)}
                        size="small"
                        edge="end"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            marginLeft: 2,
                            marginTop: 2,
                        }}
                    >
                        <KeyboardDoubleArrowRightIcon fontSize="large" />
                    </IconButton>
                </Tooltip>

                <ErrorBoundary>
                    <RayCanvas />
                </ErrorBoundary>
            </Box>
        </>
    );
};

export default RayPage;
