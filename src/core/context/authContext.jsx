import { createContext, useState } from 'react';
import { transformJwtPayload } from '../utils';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    const [isAuth, setIsAuth] = useState(token ? true : false);
    const user = transformJwtPayload(token);

    const value = {
        user,
        isAuth,
        setIsAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
