import { useState } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { DiagramCanvas } from '../canvas';
import { ErrorBoundary } from '../common';
import { DiagramForm, Header } from '../interface';
import { SideMenu } from '../ui';

const DiagramPage = () => {
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
                    marginTop: '64px',
                    position: 'relative',
                }}
            >
                <SideMenu
                    open={menuOpen}
                    onClose={toggleMenu(false)}
                    heading="Створити діаграму спрямованості"
                >
                    <DiagramForm />
                </SideMenu>

                <Tooltip
                    title="Відкрити меню побудови діаграми "
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
                    <DiagramCanvas />
                </ErrorBoundary>
            </Box>
        </>
    );
};

export default DiagramPage;
