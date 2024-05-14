import PropTypes from 'prop-types';

import { Button, ModalWindow } from 'src/components/ui';

const PrivateRoute = ({ isAuth, children }) => {
    return isAuth ? (
        children
    ) : (
        <ModalWindow
            title="Доступ до цієї сторінки обмежений"
            content="Поспішайте зареєструватися, щоб скористатися нашим сервісом."
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
