import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    forgotPasswordRequest,
    restorePasswordRequest,
    updatePasswordRequest,
    updateUsernameEmailRequest,
} from '../api';
import { authFetched, authFetching, authFetchingError } from '../store/actions';
import {
    userDataFetched,
    userDataFetching,
    userDataFetchingError,
} from '../store/actions';
import {
    restorePasswordFetched,
    restorePasswordFetching,
    restorePasswordFetchingError,
} from '../store/actions';
import {
    forgotPasswordFetched,
    forgotPasswordFetching,
    forgotPasswordFetchingError,
} from '../store/actions';
import {
    passwordFetched,
    passwordFetching,
    passwordFetchingError,
} from '../store/actions';
import { transformJwtPayload } from '../utils';

const useUserService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateUsernameEmail = data => {
        dispatch(authFetching());
        dispatch(userDataFetching());

        const response = updateUsernameEmailRequest(data.username, data.email)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);

                const user = transformJwtPayload(data.tokens.access_token);

                dispatch(authFetched({ username: user.username, email: user.email }));
                dispatch(userDataFetched());
            })
            .catch(error => {
                dispatch(authFetchingError());
                dispatch(userDataFetchingError());
                return error;
            });

        return response;
    };

    const updatePassword = data => {
        dispatch(passwordFetching());

        const response = updatePasswordRequest(data.newPassword, data.oldPassword)
            .then(() => {
                dispatch(passwordFetched());
            })
            .catch(error => {
                dispatch(passwordFetchingError());
                return error;
            });

        return response;
    };

    const forgotPassword = data => {
        dispatch(forgotPasswordFetching());

        const response = forgotPasswordRequest(data.email)
            .then(data => {
                dispatch(forgotPasswordFetched());
                return data;
            })
            .catch(error => {
                dispatch(forgotPasswordFetchingError());
                return error;
            });

        return response;
    };

    const restorePassword = password => {
        dispatch(restorePasswordFetching());

        const response = restorePasswordRequest(password)
            .then(data => {
                dispatch(restorePasswordFetched());
                localStorage.removeItem('accessToken');
                navigate('/login');
                return data;
            })
            .catch(error => {
                dispatch(restorePasswordFetchingError());
                return error;
            });

        return response;
    };

    return {
        updateUsernameEmail,
        updatePassword,
        forgotPassword,
        restorePassword,
    };
};

export default useUserService;
