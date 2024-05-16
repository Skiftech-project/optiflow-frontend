import PropTypes from 'prop-types';

import { Avatar, Modal, Stack, Typography } from '@mui/material';

import LockPersonIcon from '@mui/icons-material/LockPerson';

import { pattern } from 'src/assets';
import { Block } from 'src/components/ui';

const ModalWindow = ({ open, onClose, title, content, children }) => {
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
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 20px',
                    }}
                >
                    <Avatar
                        alt="lock-icon"
                        sx={{
                            bgcolor: 'secondary.main',
                            marginBottom: '20px',
                        }}
                    >
                        <LockPersonIcon fontSize="medium" />
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
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
};

export default ModalWindow;
