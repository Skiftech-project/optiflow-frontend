import { $api } from 'src/core/http';

export const signupRequest = async (username, email, password) => {
    try {
        const response = await $api.post('/auth/register', { username, email, password });
        return response.data;
    } catch (error) {
        throw error.message;
    }
};

export const loginRequest = async (email, password) => {
    try {
        const response = await $api.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.message;
    }
};

export const logoutRequest = async () => {
    try {
        const response = await $api.get('/auth/logout');
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
