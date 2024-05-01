import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuth, children }) => {
    return isAuth ? children : <div>sosi OR register yopta</div>;
};

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
