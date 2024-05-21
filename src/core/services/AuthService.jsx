import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginRequest, logoutRequest, refreshTokenRequest, signupRequest } from '../api';
import { loginFetched, loginFetching, loginFetchingError } from '../store/actions';
import { logoutFetched, logoutFetching, logoutFetchingError } from '../store/actions';
import { signupFetched, signupFetching, signupFetchingError } from '../store/actions';
import { setAuth } from '../store/actions';
import { userDataFetched } from '../store/actions';
import { transformJwtPayload } from '../utils';

const useAuthService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (email, password) => {
        dispatch(loginFetching());

        const response = loginRequest(email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.access_token);

                const user = transformJwtPayload(data.access_token);

                dispatch(loginFetched());
                dispatch(
                    userDataFetched({
                        username: user.username,
                        email: user.email,
                    }),
                );
                dispatch(setAuth(true));

                navigate('/calculator');
            })
            .catch(error => {
                dispatch(loginFetchingError());
                return error;
            });

        return response;
    };

    const registration = (username, email, password) => {
        dispatch(signupFetching());

        const response = signupRequest(username, email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.access_token);

                const user = transformJwtPayload(data.access_token);

                dispatch(signupFetched());
                dispatch(
                    userDataFetched({
                        username: user.username,
                        email: user.email,
                    }),
                );
                dispatch(setAuth(true));

                navigate('/calculator');
            })
            .catch(error => {
                dispatch(signupFetchingError());
                return error;
            });

        return response;
    };

    const logout = () => {
        dispatch(logoutFetching());

        const response = logoutRequest()
            .then(() => {
                localStorage.removeItem('accessToken');

                dispatch(logoutFetched());
                dispatch(userDataFetched(null));
                dispatch(setAuth(false));

                navigate('/');
            })
            .catch(error => {
                dispatch(logoutFetchingError());
                return error;
            });

        return response;
    };

    const checkAuth = () => {
        const response = refreshTokenRequest()
            .then(data => {
                localStorage.setItem('accessToken', data.access_token);
                dispatch(setAuth(true));
                const user = transformJwtPayload(data.access_token);

                dispatch(signupFetched());
                dispatch(
                    userDataFetched({
                        username: user.username,
                        email: user.email,
                    }),
                );
                dispatch(setAuth(true));
            })
            .catch(error => {
                console.log(error);
            });
        return response;
    };

    return {
        login,
        registration,
        logout,
        checkAuth,
    };
};

export default useAuthService;
