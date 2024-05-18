import { useState } from 'react';
import { useSelector } from 'react-redux';

import { DescriptionOutlined, Logout, TuneOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

import {
    Avatar,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography,
    Zoom,
} from '@mui/material';

import { useAuthService } from 'src/core/services';
import { getFirstLetterFromString } from 'src/core/utils';

import { Link } from '..';
import './AccountMenu.css';

const AccountMenu = ({ user = {} }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { logout } = useAuthService();
    const { dataLoadingStatus } = useSelector(state => state.logout);

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Stack direction="row" alignItems="center" gap={2}>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                {user?.username}
            </Typography>
            <Tooltip title="Акаунт">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="avatar" sx={{ bgcolor: 'secondary.main' }}>
                        {getFirstLetterFromString(user?.username)}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '60px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                TransitionComponent={Zoom}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem sx={{ display: { xs: 'block', md: 'none' } }} disabled>
                    {user?.username}
                </MenuItem>
                <MenuItem disabled>{user?.email}</MenuItem>

                <Divider sx={{ bgcolor: 'secondary.main', opacity: 1, my: 1 }} />

                <Link to="/templates" underline="none">
                    <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                            <DescriptionOutlined color="black" fontSize="small" />
                        </ListItemIcon>
                        Шаблони
                    </MenuItem>
                </Link>
                <Link to="/profile" underline="none">
                    <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                            <TuneOutlined color="black" fontSize="small" />
                        </ListItemIcon>
                        Налаштування
                    </MenuItem>
                </Link>
                <MenuItem
                    disabled={dataLoadingStatus === 'loading'}
                    onClick={() => {
                        logout();
                        handleCloseUserMenu();
                    }}
                >
                    <ListItemIcon>
                        <Logout color="black" fontSize="small" />
                    </ListItemIcon>
                    Вихід
                </MenuItem>
            </Menu>
        </Stack>
    );
};

AccountMenu.propTypes = {
    user: PropTypes.object,
};

export default AccountMenu;
