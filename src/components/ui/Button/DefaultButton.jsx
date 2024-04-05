import { Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const buttonStyles = {
    height: '33px',
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: 'none',
    width: 'fit-content',
};

const Button = ({
    to = '/',
    link = false,
    color = 'secondary',
    size = 'small',
    sx = {},
    children,
    ...props
}) => {
    return (
        <MuiButton
            to={link ? to : null}
            component={link ? Link : null}
            size={size}
            variant="contained"
            color={color}
            sx={{ ...buttonStyles, ...sx }}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    sx: PropTypes.object,
    link: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
