import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Logout, Settings } from '@mui/icons-material';
import PropTypes from 'prop-types';

import {
    Avatar,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
    Zoom,
} from '@mui/material';

import { useAuthService } from 'src/core/services';
import { getFirstLetterFromString } from 'src/core/utils';

import { Link } from '..';
import './AccountMenu.css';

const AccountMenu = ({ user = {} }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { logout } = useAuthService();
    const { dataLoadingStatus } = useSelector(state => state.auth);

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title="Open settings">
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
                <MenuItem disabled>{user?.username}</MenuItem>
                <MenuItem disabled>{user?.email}</MenuItem>

                <Divider sx={{ bgcolor: 'secondary.main', opacity: 1, my: 1 }} />

                <Link to="/profile" underline="none">
                    <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                            <Settings color="black" fontSize="small" />
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
        </>
    );
};

AccountMenu.propTypes = {
    user: PropTypes.object,
};

export default AccountMenu;
