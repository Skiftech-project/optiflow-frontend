import axios from 'axios';

export const apiBase = 'https://optiflowbackend.azurewebsites.net';

export const $api = axios.create({
    baseURL: apiBase,
    withCredentials: true,
});

// * Interceptor на каждый запрос на сервер, теперь будет вешатся хедер с токеном из localStorage
// $api.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });
