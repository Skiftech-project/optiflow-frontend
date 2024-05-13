import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

const ErrorMessage = ({ children }) => {
    return (
        <Typography align="center" sx={{ color: 'secondary.main' }}>
            {children}
        </Typography>
    );
};

ErrorMessage.propTypes = {
    children: PropTypes.string,
};

export default ErrorMessage;
