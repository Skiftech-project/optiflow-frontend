import { useContext } from 'react';

import PropTypes from 'prop-types';

import { AppBar, Box, Container, Toolbar, Tooltip } from '@mui/material';

import { logo } from 'src/assets';
import { AccountMenu, BurgerMenu, Link } from 'src/components/ui';
import { NavLink } from 'src/components/ui';
import { AuthContext } from 'src/core/context/authContext';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація', path: '/ray' },
];

const styleConfig = {
    logo: {
        mr: 5,
        display: 'flex',
        flexGrow: { xs: 1, md: 0 },
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
    const { isAuth, user } = useContext(AuthContext);

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
                    <Link to="/" sx={styleConfig.logo}>
                        <Tooltip color="primary" title="На головну" arrow>
                            <img src={logo} alt="logo" />
                        </Tooltip>
                    </Link>

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
