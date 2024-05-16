import { useContext } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material';

import { AccountMenu, BurgerMenu, Logo } from 'src/components/ui';
import { NavLink } from 'src/components/ui';
import { AuthContext } from 'src/core/context/authContext';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація проміню', path: '/ray' },
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
        },
    },
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
    const { data } = useSelector(state => state.auth);

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
                    <Logo sx={styleConfig.logo} />

                    <Stack direction="row" gap={4} sx={styleConfig.menu.desktop}>
                        {pages.map(page => (
                            <NavLink key={page.text} to={page.path}>
                                {page.text}
                            </NavLink>
                        ))}
                    </Stack>

                    <Box>{isAuth ? <AccountMenu user={data} /> : children}</Box>

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
