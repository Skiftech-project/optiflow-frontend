import PropTypes from 'prop-types';

import { Alert, AlertTitle, IconButton, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';

import CloseIcon from '@mui/icons-material/Close';

const Notification = props => {
    const { open, type, title, variant, onClose, autoHideDuration, children } = props;

    const action = (
        <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            action={action}
            TransitionComponent={Slide}
        >
            <Alert
                onClose={onClose}
                severity={type}
                variant={variant}
                sx={{ width: '100%', borderRadius: '10px' }}
            >
                {title ? <AlertTitle>{title}</AlertTitle> : null}
                {children}
            </Alert>
        </Snackbar>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf(['info', 'error', 'success', 'warning']),
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    autoHideDuration: PropTypes.number,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

Notification.defaultProps = {
    type: 'info',
    variant: 'standard',
    autoHideDuration: 6000,
};

export default Notification;
