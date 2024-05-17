import axios from 'axios';

import { refreshTokenUrl } from '../config/endpoints';

export const $api = axios.create({
    withCredentials: true,
});

// * Interceptor на каждый запрос на сервер, теперь будет вешатся хедер с токеном из localStorage
$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

$api.interceptors.response.use(
    config => {
        return config;
    },
    async error => {
        const originalRequest = error.config;
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(refreshTokenUrl, {
                    withCredentials: true,
                });
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАНИЙ КОРИСТУВАЧ!');
            }
        }
        throw error;
    },
);
