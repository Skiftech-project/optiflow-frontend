// import { useContext } from 'react';
import { updateUsernameEmailRequest } from '../api/user/user';

// import { AuthContext } from '../context';

const useUserService = () => {
    // const { setIsAuth } = useContext(AuthContext);

    const updateUsernameEmail = data => {
        const response = updateUsernameEmailRequest(data.username, data.email)
            .then(data => {
                localStorage.setItem('accessToken', data.tokens.access_token);
                localStorage.setItem('refreshToken', data.tokens.refresh_token);
            })
            .catch(error => {
                return error;
            });

        return response;
    };

    return {
        updateUsernameEmail,
    };
};

export default useUserService;
