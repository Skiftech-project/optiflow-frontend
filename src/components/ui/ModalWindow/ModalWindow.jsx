import PropTypes from 'prop-types';

import { Avatar, Modal, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import LockPersonIcon from '@mui/icons-material/LockPerson';

import { pattern } from 'src/assets';
import { Block } from 'src/components/ui';

const ModalWindow = ({ open, onClose, title, content, children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
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
                        width: isMobile ? `40%` : '30%',
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        alt="lock-icon"
                        sx={{ bgcolor: 'secondary.main', marginBottom: '20px' }}
                    >
                        <LockPersonIcon />
                    </Avatar>
                    <Typography align="center" variant="h5">
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
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
};

export default ModalWindow;
