import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Button, ModalWindow } from 'src/components/ui';

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
    );
};

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
