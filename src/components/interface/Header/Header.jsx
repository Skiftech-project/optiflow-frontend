import { useContext } from 'react';

import PropTypes from 'prop-types';

import { AppBar, Box, Container, Toolbar, Tooltip } from '@mui/material';

import { logo } from 'src/assets';
import { AccountMenu, BurgerMenu } from 'src/components/ui';
import { NavLink } from 'src/components/ui';
import { AuthContext } from 'src/core/context/authContext';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація', path: '/ray' },
];

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

const Header = ({
    elevation = 2,
    sx = {},
    position = 'static',
    color = 'white',
    children,
    ...props
}) => {
    const { isAuth } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

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
                        {isAuth ? <AccountMenu user={user} /> : children}
                    </Box>

                    <Box sx={styleConfig.menu.mobile}>
                        <BurgerMenu items={pages} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

Header.propTypes = {
    elevation: PropTypes.number,
    sx: PropTypes.object,
    position: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
};

export default Header;
