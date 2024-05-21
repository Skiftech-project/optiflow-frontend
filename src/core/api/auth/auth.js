import axios from 'axios';

import {
    loginUrl,
    logoutUrl,
    refreshTokenUrl,
    registerUrl,
} from 'src/core/config/endpoints';
import { $api } from 'src/core/http';

export const signupRequest = async (username, email, password) => {
    try {
        const response = await $api.post(registerUrl, { username, email, password });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const loginRequest = async (email, password) => {
    try {
        const response = await $api.post(loginUrl, { email, password });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const logoutRequest = async () => {
    try {
        const response = await $api.get(logoutUrl);
        return response.data;
    } catch (error) {
        throw error.message;
    }
};

export const refreshTokenRequest = async () => {
    try {
        const response = await axios.get(refreshTokenUrl, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
