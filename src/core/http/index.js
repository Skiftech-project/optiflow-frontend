import axios from 'axios';

export const apiBase = 'https://optiflowbackend.azurewebsites.net';
// export const apiBase = 'http://127.0.0.1:5000';

export const $api = axios.create({
    baseURL: apiBase,
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
                const response = (await axios.get)(`${apiBase}/auth/refresh`, {
                    withCredentials: true,
                });
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
            }
        }
        throw error;
    },
);
