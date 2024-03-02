import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Link } from '..';

const NavLink = ({ children, ...props }) => {
    const theme = useTheme();

    const isLinkActive = ({ isActive }) => ({
        color: isActive ? theme.palette.primary.main : '',
        textDecoration: isActive ? 'underline' : '',
    });

    return (
        <Link style={isLinkActive} component={RouterNavLink} end {...props}>
            {children}
        </Link>
    );
};

NavLink.propTypes = { children: PropTypes.node.isRequired };

export default NavLink;
