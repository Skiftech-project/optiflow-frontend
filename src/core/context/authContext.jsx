import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { authFetched } from '../store/actions';
import { transformJwtPayload } from '../utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const userData = transformJwtPayload(token);
            setUser(userData);
            setIsAuth(true);
            dispatch(authFetched({ username: userData.username, email: userData.email }));
        } else {
            setUser(null);
            setIsAuth(false);
        }
    }, [token, dispatch]);

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
