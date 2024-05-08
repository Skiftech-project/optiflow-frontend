import { NavLink as RouterNavLink } from 'react-router-dom';

import { styled } from '@mui/system';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';

import { Link } from '..';

const NavLink = ({ children, ...props }) => {
    const theme = useTheme();

    const isLinkActive = ({ isActive }) => ({
        color: isActive ? theme.palette.primary.main : '',
        textDecoration: isActive ? 'underline' : '',
    });

    return (
        <View style={isLinkActive} component={RouterNavLink} end {...props}>
            {children}
        </View>
    );
};

const View = styled(Link)(() => ({
    fontSize: '16px',
}));

NavLink.propTypes = { children: PropTypes.node.isRequired };

export default NavLink;
