import { signupRequest, loginRequest, logoutRequest } from '../api';

const useAuthService = () => {
    const login = (email, password) => {
        return loginRequest(email, password);
    };

    const registration = (username, email, password) => {
        return signupRequest(username, email, password);
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
