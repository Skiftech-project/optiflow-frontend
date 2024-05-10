import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/system';
import PropTypes from 'prop-types';

import { Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Link = ({
    underline = 'hover',
    variant = 'inherrit',
    component = RouterLink,
    sx = {},
    ...props
}) => {
    const theme = useTheme();

    return (
        <View
            theme={theme}
            underline={underline}
            component={component}
            variant={variant}
            sx={sx}
            {...props}
        ></View>
    );
};

const View = styled(MuiLink)(({ theme, sx }) => ({
    color: theme.palette.black.main || sx?.color,
    transition: '0.2s all ease-in-out',
}));

Link.propTypes = {
    sx: PropTypes.object,
    component: PropTypes.elementType,
    variant: PropTypes.string,
    underline: PropTypes.string,
};

export default Link;
