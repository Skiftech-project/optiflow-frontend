import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

const Button = ({ color = 'secondary', size = 'small', children, ...props }) => {
    return (
        <MuiButton
            size={size}
            variant="contained"
            color={color}
            sx={{
                width: '126px',
                height: '33px',
                fontSize: '15px',
                fontWeight: 'bold',
                textTransform: 'none',
            }}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
