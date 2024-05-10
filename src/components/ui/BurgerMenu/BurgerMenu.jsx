import { useState } from 'react';

import PropTypes from 'prop-types';

import { IconButton, Menu, MenuItem, Zoom } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { Link } from '..';

const BurgerMenu = ({ items = [] }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                edge="end"
                disableRipple
            >
                {anchorElNav ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
                sx={{
                    mt: '60px',
                    display: { xs: 'block', md: 'none' },
                }}
                id="menu-appbar"
                anchorEl={anchorElNav}
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
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {items.map(page => (
                    <Link to={page.path} key={page.text} underline="none">
                        <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
};

BurgerMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }),
    ),
};

export default BurgerMenu;
