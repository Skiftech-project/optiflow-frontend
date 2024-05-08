import { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { logo } from 'src/assets';
import { Link, NavLink } from 'src/components/ui';
import { AuthContext } from 'src/core/context/authContext';
import { useAuthService } from 'src/core/services';
import { getFirstLetterFromString } from 'src/core/utils';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація', path: '/ray' },
];

const settings = ['Profile', 'Logout'];

const styleConfig = {
    logo: {
        desktop: { mr: 5, display: { xs: 'none', md: 'flex' } },
        mobile: {
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
        },
    },
    menu: {
        mobile: { display: { xs: 'flex', md: 'none' } },
        desktop: {
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            gap: '30px',
        },
    },
    tools: { flexGrow: 0 },
};

const AccountMenu = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="avatar">
                        {getFirstLetterFromString(user.username)}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
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
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

const BurgerMenu = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
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
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map(page => (
                    <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <Link to={page.path}>{page.text}</Link>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

const Header = ({
    elevation = 2,
    sx = {},
    position = 'static',
    color = 'white',
    children,
    ...props
}) => {
    const { isAuth } = useContext(AuthContext);
    const { logout } = useAuthService();

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        logout();
    };

    return (
        <AppBar
            elevation={elevation}
            color={color}
            position={position}
            sx={sx}
            {...props}
        >
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Box sx={styleConfig.logo.desktop}>
                        <NavLink to="/">
                            <Tooltip color="primary" title="На головну">
                                <img src={logo} alt="logo" />
                            </Tooltip>
                        </NavLink>
                    </Box>

                    <Box sx={styleConfig.logo.mobile}>
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </Box>

                    <Box sx={styleConfig.menu.desktop}>
                        {pages.map(page => (
                            <NavLink key={page.text} to={page.path}>
                                {page.text}
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={styleConfig.tools}>
                        {isAuth ? (
                            <AccountMenu
                                anchorElUser={anchorElUser}
                                handleOpenUserMenu={handleOpenUserMenu}
                                handleCloseUserMenu={handleCloseUserMenu}
                            />
                        ) : (
                            children
                        )}
                    </Box>
                    <Box sx={styleConfig.menu.mobile}>
                        <BurgerMenu
                            anchorElNav={anchorElNav}
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

BurgerMenu.propTypes = {
    anchorElNav: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
    handleOpenNavMenu: PropTypes.func.isRequired,
    handleCloseNavMenu: PropTypes.func.isRequired,
};

AccountMenu.propTypes = {
    anchorElUser: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
    handleOpenUserMenu: PropTypes.func.isRequired,
    handleCloseUserMenu: PropTypes.func.isRequired,
};

Header.propTypes = {
    elevation: PropTypes.number,
    sx: PropTypes.object,
    position: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
};

export default Header;
