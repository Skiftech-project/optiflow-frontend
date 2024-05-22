import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    deleteUserRequest,
    forgotPasswordRequest,
    restorePasswordRequest,
    updatePasswordRequest,
    updateUsernameEmailRequest,
} from '../api';
import {
    deleteUserFetched,
    deleteUserFetching,
    deleteUserFetchingError,
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
import { setAuth } from '../store/actions';
import { transformJwtPayload } from '../utils';

const useUserService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateUsernameEmail = data => {
        dispatch(userDataFetching());

        const response = updateUsernameEmailRequest(data.username, data.email)
            .then(data => {
                localStorage.setItem('accessToken', data.access_token);

                const user = transformJwtPayload(data.access_token);

                dispatch(
                    userDataFetched({
                        username: user.username,
                        email: user.email,
                    }),
                );
            })
            .catch(error => {
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

    const deleteUser = () => {
        dispatch(deleteUserFetching());

        const response = deleteUserRequest()
            .then(data => {
                localStorage.removeItem('accessToken');
                dispatch(userDataFetched(null));
                dispatch(setAuth(false));
                dispatch(deleteUserFetched());
                navigate('/');
                return data;
            })
            .catch(error => {
                deleteUserFetchingError();
                throw error;
            });

        return response;
    };

    return {
        updateUsernameEmail,
        updatePassword,
        forgotPassword,
        restorePassword,
        deleteUser,
    };
};

export default useUserService;
