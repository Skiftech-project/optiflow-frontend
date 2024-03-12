import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const Block = ({ padding, sx, children, ...props }) => {
    return (
        <Paper
            elevation={2}
            sx={{ padding: padding, borderRadius: '10px', ...sx }}
            {...props}
        >
            {children}
        </Paper>
    );
};

Block.propTypes = {
    padding: PropTypes.string,
    sx: PropTypes.object,
    children: PropTypes.node,
};

export default Block;
