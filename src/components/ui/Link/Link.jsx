import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const Link = ({
    underline = 'none',
    variant = 'inherrit',
    component = RouterLink,
    ...props
}) => {
    const theme = useTheme();

    return (
        <View
            theme={theme}
            underline={underline}
            component={component}
            variant={variant}
            {...props}
        ></View>
    );
};

const View = styled(MuiLink)(({ theme }) => ({
    color: theme.palette.black.main,
    transition: '0.2s all ease-in-out',
    '&:hover': { color: theme.palette.primary.main },
}));

Link.propTypes = {
    component: PropTypes.elementType,
    variant: PropTypes.string,
    underline: PropTypes.string,
};

export default Link;
