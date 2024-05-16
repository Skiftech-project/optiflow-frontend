import { useDispatch } from 'react-redux';

import { updatePasswordRequest, updateUsernameEmailRequest } from '../api/user/user';
import { authFetched, authFetching, authFetchingError } from '../store/actions';
import {
    passwordFetched,
    passwordFetching,
    passwordFetchingError,
} from '../store/actions';
import { transformJwtPayload } from '../utils';

const useUserService = () => {
    const dispatch = useDispatch();

    const updateUsernameEmail = data => {
        dispatch(authFetching());

        const response = updateUsernameEmailRequest(data.username, data.email)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);

                const user = transformJwtPayload(data.tokens.access_token);

                dispatch(authFetched({ username: user.username, email: user.email }));
            })
            .catch(error => {
                dispatch(authFetchingError());
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

    return {
        updateUsernameEmail,
        updatePassword,
    };
};

export default useUserService;
