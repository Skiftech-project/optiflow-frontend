import PropTypes from 'prop-types';

import { Button } from 'src/components/ui';

// TODO: add layout for non-registered

const PrivateRoute = ({ isAuth, children }) => {
    return isAuth ? (
        children
    ) : (
        <>
            <div>Ви повинні зареєструватися</div>
            <Button link to="/register">
                Зареєструватися
            </Button>
        </>
    );
};

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
