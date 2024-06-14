import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';

const Highlighter = ({ children, color, disableGutter = false }) => {
    const theme = useTheme();
    const styles = { color: color || theme.palette.primary.main, fontWeight: 600 };
    return (
        <span style={styles}>
            {' '}
            {disableGutter ? null : '\u00A0'}
            {children}
        </span>
    );
};

Highlighter.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    disableGutter: PropTypes.bool,
};

export default Highlighter;
