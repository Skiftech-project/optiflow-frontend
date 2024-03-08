import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const defaultStyle = {
    color: '#1E55B3',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: { xs: 14, sm: 18, md: 21 },
};

const blockStyle = {
    padding: '13px 0',
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
};

const TitleBlock = ({
    align = 'center',
    component = 'h2',
    block,
    sx,
    children,
    ...props
}) => {
    const style = block ? { ...defaultStyle, ...blockStyle } : { ...defaultStyle };
    return (
        <Typography
            align={align}
            sx={{ ...style, ...sx }}
            component={component}
            {...props}
        >
            {children}
        </Typography>
    );
};

TitleBlock.propTypes = {
    align: PropTypes.oneOf(['center', 'left', 'right']),
    block: PropTypes.bool,
    component: PropTypes.elementType,
    sx: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default TitleBlock;
