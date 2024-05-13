import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginRequest, logoutRequest, signupRequest } from '../api';
import { AuthContext } from '../context/authContext';
import { authFetched, authFetching, authFetchingError } from '../store/actions';

const useAuthService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext);

    const login = (email, password) => {
        dispatch(authFetching());

        const response = loginRequest(email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                setIsAuth(true);

                navigate('/calculator');
                dispatch(authFetched());
            })
            .catch(error => {
                dispatch(authFetchingError());
                return error;
            });

        return response;
    };

    const registration = (username, email, password) => {
        dispatch(authFetching());

        const response = signupRequest(username, email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                setIsAuth(true);

                navigate('/calculator');
                dispatch(authFetched());
            })
            .catch(error => {
                dispatch(authFetchingError());
                return error;
            });

        return response;
    };

    const logout = () => {
        dispatch(authFetching());

        const response = logoutRequest()
            .then(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                setIsAuth(false);
                navigate('/');
                dispatch(authFetched());
            })
            .catch(() => dispatch(authFetchingError()));

        return response;
    };

    return {
        login,
        registration,
        logout,
    };
};

export default useAuthService;
