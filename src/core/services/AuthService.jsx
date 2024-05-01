import { signupRequest, loginRequest, logoutRequest } from '../api';
import { useDispatch } from 'react-redux';
import {
    signupFetched,
    signupFetching,
    signupFetchingError,
    loginFetched,
    loginFetching,
    loginFetchingError,
} from '../store/actions';
import { jwtDecode } from 'jwt-decode';

const useAuthService = () => {
    const dispatch = useDispatch();

    const login = (email, password) => {
        dispatch(loginFetching());

        const response = loginRequest(email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                const user = jwtDecode(data.tokens.access_token);

                dispatch(loginFetched(_transformJwtPayload(user)));
            })
            .catch(() => dispatch(loginFetchingError()));

        return response;
    };

    const registration = (username, email, password) => {
        dispatch(signupFetching());

        const response = signupRequest(username, email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                const user = jwtDecode(data.tokens.access_token);

                dispatch(signupFetched(_transformJwtPayload(user)));
            })
            .catch(e => {
                dispatch(signupFetchingError());
                console.log(e);
            });
        return response;
    };

    const logout = () => {
        return logoutRequest();
    };

    const _transformJwtPayload = payload => {
        return {
            username: payload.username,
            sub: payload.sub,
        };
    };

    return {
        login,
        registration,
        logout,
    };
};

export default useAuthService;
