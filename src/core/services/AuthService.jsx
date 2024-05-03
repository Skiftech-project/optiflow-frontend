import { useContext } from 'react';
import { signupRequest, loginRequest, logoutRequest } from '../api';
import { useDispatch } from 'react-redux';
import { authFetching, authFetchingError } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

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

                navigate('/'); // TODO: change way
            })
            .catch(() => dispatch(authFetchingError()));

        return response;
    };

    const registration = (username, email, password) => {
        dispatch(authFetching());

        const response = signupRequest(username, email, password)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                setIsAuth(true);

                navigate('/'); // TODO: change way
            })
            .catch(e => {
                dispatch(authFetchingError());
                console.log(e);
            });
        return response;
    };

    const logout = () => {
        return logoutRequest();
    };

    return {
        login,
        registration,
        logout,
    };
};

export default useAuthService;
