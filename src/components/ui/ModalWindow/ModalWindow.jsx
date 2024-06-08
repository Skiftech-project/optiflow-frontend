import PropTypes from 'prop-types';

import { Avatar, Modal, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import LockPersonIcon from '@mui/icons-material/LockPerson';

import { Block } from 'src/components/ui';

const ModalWindow = ({
    open,
    sx,
    onClose,
    title,
    content,
    children,
    width,
    icon = <LockPersonIcon fontSize="medium" />,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Modal
            sx={sx}
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                sx={{
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Block
                    sx={{
                        padding: isMobile ? '25px' : '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 20px',
                        width: isMobile ? '95%' : `${width}px`,
                    }}
                >
                    <Avatar
                        alt="lock-icon"
                        sx={{
                            bgcolor: 'secondary.main',
                            marginBottom: '20px',
                        }}
                    >
                        {icon}
                    </Avatar>
                    <Typography align="center" variant="h5" fontWeight={500}>
                        {title}
                    </Typography>
                    <Typography align="center" sx={{ margin: '15px 0' }}>
                        {content}
                    </Typography>

                    {children}
                </Block>
            </Stack>
        </Modal>
    );
};

ModalWindow.propTypes = {
    sx: PropTypes.object,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
};

export default ModalWindow;
