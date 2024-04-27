import { $api } from '../api';
import { signup } from '../api';

const useAuthService = () => {
    const login = (email, password) => {
        return $api.post('/login', { email, password });
    };

    const registration = (name, email, password) => {
        return signup(name, email, password);
    };

    const logout = () => {
        return $api.post('/logout');
    };

    return {
        login,
        registration,
        logout,
    };
};

export default useAuthService;
