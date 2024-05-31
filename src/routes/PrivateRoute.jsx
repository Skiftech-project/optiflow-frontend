/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import { pattern } from 'src/assets';
import { Button, ModalWindow } from 'src/components/ui';
import { PatternBgStyles } from 'src/styles';

const PrivateRoute = ({ isAuth, children }) => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (!isAuth) {
            setOpenModal(true);
        }
    }, []);

    return isAuth ? (
        children
    ) : (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                background: `url(${pattern})`,
                ...PatternBgStyles,
            }}
        >
            <ModalWindow
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Доступ до цієї сторінки обмежений"
                content="Зареєструйтесь, щоб скористатися нашим сервісом."
            >
                <Button link to="/register">
                    Зареєструватися
                </Button>
            </ModalWindow>
        </Box>
    );
};

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
