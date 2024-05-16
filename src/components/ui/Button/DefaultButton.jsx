import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Box, CircularProgress, Button as MuiButton } from '@mui/material';

const loaderStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
};

const Button = ({
    to = '/',
    link = false,
    color = 'secondary',
    size = 'small',
    sx = {},
    loading = false,
    disabled = false,
    fontSize,
    children,
    ...props
}) => {
    const buttonStyles = useMemo(
        () => ({
            position: 'relative',
            fontSize: fontSize ? `${fontSize}px` : '15px',
            fontWeight: 'bold',
            textTransform: 'none',
            textAlign: 'center',
        }),
        [fontSize],
    );

    return (
        <Box sx={{ position: 'relative' }}>
            <MuiButton
                to={link ? to : null}
                component={link ? Link : null}
                disabled={loading || disabled}
                size={size}
                variant="contained"
                color={color}
                sx={{
                    ...buttonStyles,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiButton>
            {loading && (
                <CircularProgress
                    size={24}
                    color="primary"
                    sx={loaderStyles}
                    thickness={5}
                />
            )}
        </Box>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    sx: PropTypes.object,
    link: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    fontSize: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default Button;
