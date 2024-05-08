import PropTypes from 'prop-types';

import { Paper } from '@mui/material';

const Block = ({ elevation = 2, padding, sx, children, ...props }) => {
    return (
        <Paper
            elevation={elevation}
            sx={{ padding: padding, borderRadius: '10px', ...sx }}
            {...props}
        >
            {children}
        </Paper>
    );
};

Block.propTypes = {
    elevation: PropTypes.number,
    padding: PropTypes.string,
    sx: PropTypes.object,
    children: PropTypes.node,
};

export default Block;
