import PropTypes from 'prop-types';

import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { pattern } from 'src/assets';
import { Block } from 'src/components/ui';

const ModalWindow = ({ title, content, children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url(${pattern})`,
            }}
        >
            <Block
                sx={{
                    width: isMobile ? `40%` : '80%',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography align="center" variant="h5">
                    {title}
                </Typography>
                <Typography align="center" sx={{ margin: '15px 0' }}>
                    {content}
                </Typography>

                {children}
            </Block>
        </Stack>
    );
};

ModalWindow.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
};

export default ModalWindow;
