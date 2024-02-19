import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Container,
    Box,
    Toolbar,
    Menu,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    IconButton,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { logo } from 'src/assets';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація', path: '/ray' },
];

const settings = ['Profile', 'Logout'];

const styleConfig = {
    logo: {
        desktop: { mr: 5, display: { xs: 'none', md: 'flex' } },
        mobile: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
    },
    menu: {
        mobile: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
        desktop: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    },
    tools: { flexGrow: 0 },
};

const AccountMenu = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu }) => {
    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" />
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
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                to={page.path}
                            >
                                {page.text}
                            </Link>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

const Header = () => {
    const [isAuth] = useState(true);

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
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Box sx={styleConfig.logo.desktop}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </Box>

                    <Box sx={styleConfig.menu.mobile}>
                        <BurgerMenu
                            anchorElNav={anchorElNav}
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                        />
                    </Box>

                    <Box sx={styleConfig.logo.mobile}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </Box>

                    <Box sx={styleConfig.menu.desktop}>
                        {pages.map(page => (
                            <Button
                                key={page.text}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '20px',
                                }}
                            >
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                    to={page.path}
                                >
                                    {page.text}
                                </Link>
                            </Button>
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
                            <Button
                                size="small"
                                variant="contained"
                                sx={{
                                    width: '126px',
                                    height: '33px',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                }}
                            >
                                Реєстрація
                            </Button>
                        )}
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

export default Header;
