import { useMemo } from 'react';

import PropTypes from 'prop-types';

import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Block } from '..';

const TitleBlock = ({
    align = 'center',
    component = 'h2',
    block = false,
    sx = {},
    children,
    ...props
}) => {
    const theme = useTheme();

    const textStyle = useMemo(
        () => ({
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: { xs: 14, sm: 18, md: 21 },
        }),
        [theme.palette.primary.main],
    );

    return (
        <>
            {block ? (
                <Block padding="13px 0">
                    <Typography
                        align={align}
                        sx={{ ...textStyle, ...sx }}
                        component={component}
                        {...props}
                    >
                        {children}
                    </Typography>
                </Block>
            ) : (
                <Typography
                    align={align}
                    sx={{ ...textStyle, ...sx }}
                    component={component}
                    {...props}
                >
                    {children}
                </Typography>
            )}
        </>
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
