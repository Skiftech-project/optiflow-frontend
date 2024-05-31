import PropTypes from 'prop-types';

import { Divider, IconButton, Paper, Stack, Typography } from '@mui/material';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const menuStyles = {
    width: 450,
    height: '100%',
    position: 'absolute',
    zIndex: '5',
    transition: '0.5s',
    overflow: 'auto',
    p: 2,
};

const SideMenu = ({ open = false, onClose = null, children }) => {
    return (
        <Paper
            elevation={4}
            sx={{
                ...menuStyles,
                transform: open ? 'translateX(0)' : 'translateX(-100%)',
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography
                    color="primary"
                    variant="overline"
                    fontWeight={700}
                    fontSize={15}
                >
                    Перебудувати промінь
                </Typography>
                <IconButton onClick={onClose} size="small" edge="start">
                    <KeyboardDoubleArrowLeftIcon fontSize="large" />
                </IconButton>
            </Stack>
            <Divider sx={{ mb: 7, mt: 1 }} />
            {children}
        </Paper>
    );
};

SideMenu.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default SideMenu;
